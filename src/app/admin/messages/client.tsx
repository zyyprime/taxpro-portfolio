"use client";

import { useEffect, useState } from "react";
import { client, writeClient, isSanityConfigured } from "@/sanity/lib/client";
import { contactMessagesQuery } from "@/sanity/lib/queries";
import { Mail, CheckCircle, Reply, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
  replied: boolean;
  replyContent?: string;
  _createdAt: string;
}

export function MessagesClient() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [replyingId, setReplyingId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  const fetchMessages = async () => {
    try {
      if (!client) {
        setMessages([]);
        return;
      }
      const data = await client.fetch(contactMessagesQuery);
      setMessages(data);
    } catch {
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleReply = async (msg: Message) => {
    if (!replyText.trim() || !writeClient) return;
    try {
      await writeClient
        .patch(msg._id)
        .set({ replied: true, replyContent: replyText })
        .commit();
      toast.success("回复已保存");
      setReplyingId(null);
      setReplyText("");
      fetchMessages();
    } catch {
      toast.error("回复失败，请重试");
    }
  };

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("zh-CN");
    } catch {
      return dateStr;
    }
  };

  if (!isSanityConfigured()) {
    return (
      <div className="p-6">
        <div className="rounded-xl border border-border/50 bg-card p-12 text-center">
          <Mail className="size-10 mx-auto text-muted-foreground/30 mb-3" />
          <p className="text-muted-foreground mb-1">留言功能需要配置 Sanity</p>
          <p className="text-sm text-muted-foreground/60">设置 NEXT_PUBLIC_SANITY_PROJECT_ID 后即可使用</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center h-64">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">留言管理</h1>
        <p className="text-muted-foreground text-sm mt-1">
          共 {messages.length} 条留言
        </p>
      </div>

      {messages.length === 0 ? (
        <div className="rounded-xl border border-border/50 bg-card p-12 text-center">
          <Mail className="size-10 mx-auto text-muted-foreground/30 mb-3" />
          <p className="text-muted-foreground">暂无留言</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="rounded-xl border border-border/50 bg-card p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-medium">{msg.name}</div>
                  <div className="text-sm text-muted-foreground">{msg.email}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {formatDate(msg._createdAt)}
                  </span>
                  {msg.replied ? (
                    <span className="text-xs text-green-500 flex items-center gap-1">
                      <CheckCircle className="size-3" /> 已回复
                    </span>
                  ) : (
                    <span className="text-xs text-amber-500">待回复</span>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 mb-3">
                {msg.message}
              </p>

              {msg.replyContent && (
                <div className="text-sm bg-primary/5 rounded-lg p-3 mb-3 border border-primary/10">
                  <span className="text-xs text-primary font-medium block mb-1">我的回复：</span>
                  {msg.replyContent}
                </div>
              )}

              {replyingId === msg._id ? (
                <div className="space-y-2">
                  <Textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="输入回复内容..."
                    rows={3}
                  />
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => handleReply(msg)}
                      disabled={!replyText.trim()}
                    >
                      保存回复
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => { setReplyingId(null); setReplyText(""); }}
                    >
                      取消
                    </Button>
                  </div>
                </div>
              ) : (
                !msg.replied && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setReplyingId(msg._id)}
                  >
                    <Reply className="size-3 mr-1" /> 回复
                  </Button>
                )
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
