/**
 * {@link https://discord.com/developers/docs/resources/webhook#execute-webhook Execute Webhook}
 * @param params
 */
export async function executeWebhook(
  params: ExecuteWebhookQuerystringParams | ExecuteWebhookJsonFormParams
): Promise<void> {
  return;
}

/**
 * {@link https://discord.com/developers/docs/resources/webhook#execute-webhook-querystring-params Execute Webhook — Querystring Params}
 */
interface ExecuteWebhookQuerystringParams {
  wait?: boolean;
}

/**
 * {@link https://discord.com/developers/docs/resources/webhook#execute-webhook-jsonform-params Execute Webhook — Querystring Params}
 */
interface ExecuteWebhookJsonFormParams {
  content?: string;
  username?: string;
  avatar_url?: string;
  tts?: boolean;
  file?: Blob | File;
  embeds?: Embed[];
  allowed_mentions: AllowedMentions;
}

/**
 * {@link https://discord.com/developers/docs/resources/channel#embed-object Channel — Embed Object}
 */
interface Embed {
  /** title of embed */
  title?: string;
  /** description of embed */
  description?: string;
  /** url of embed */
  url?: string;
  /** timestamp of embed content */
  timestamp?: string;
  /** color code of the embed */
  color?: number;
  /** footer information */
  footer?: EmbedFooter;
  /** image information */
  image?: EmbedImage;
  /** thumbnail information */
  thumbnail?: EmbedThumbnail;
  /** video information */
  video?: EmbedVideo;
  /** provider information */
  provider?: EmbedProvider;
  /** author information */
  author?: EmbedAuthor;
  /** fields information */
  fields?: EmbedField[];
}

/**
 * {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure Channel — Embed Object — Embed Thumbnail Structure}
 */
interface EmbedThumbnail {
  /** source url of thumbnail (only supports http(s) and attachments) */
  url?: string;
  /** a proxied url of the thumbnail */
  proxy_url?: string;
  /** height of thumbnail */
  height?: number;
  /** width of thumbnail */
  width?: number;
}

/**
 * {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure Channel — Embed Object — Embed Video Structure}
 */
interface EmbedVideo {
  /** source url of video */
  url?: string;
  /** a proxied url of the video */
  proxy_url?: string;
  /** height of video */
  height?: number;
  /** width of video */
  width?: number;
}

/**
 * {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure Channel — Embed Object — Embed Image Structure}
 */
interface EmbedImage {
  /** source url of image (only supports http(s) and attachments) */
  url?: string;
  /** a proxied url of the image */
  proxy_url?: string;
  /** height of image */
  height?: number;
  /** width of image */
  width?: number;
}

/**
 * {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure Channel — Embed Object — Embed Provider Structure}
 */
interface EmbedProvider {
  /** name of provider */
  name?: string;
  /** url of provider */
  url?: string;
}

/**
 * {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure Channel — Embed Object — Embed Author Structure}
 */
interface EmbedAuthor {
  /** name of author */
  name?: string;
  /** url of author */
  url?: string;
  /** url of author icon (only supports http(s) and attachments) */
  icon_url?: string;
  /** a proxied url of author icon */
  proxy_icon_url?: string;
}

/**
 * {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure Channel — Embed Object — Embed Footer Structure}
 */
interface EmbedFooter {
  /** footer text */
  text: string;
  /** url of footer icon (only supports http(s) and attachments) */
  icon_url?: string;
  /** a proxied url of footer icon */
  proxy_icon_url?: string;
}

/**
 * {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure Channel — Embed Object — Embed Field Structure}
 */
interface EmbedField {
  /** name of the field */
  name: string;
  /** value of the field */
  value: string;
  /** whether or not this field should display inline */
  inline?: boolean;
}

/**
 * {@link https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types Channel — Allowed Mentions Object — Allowed Mention Types}
 */
type AllowedMentionTypes = "roles" | "users" | "everyone";

/**
 * {@link https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mentions-structure Channel — Allowed Mentions Object — Allowed Mentions Structure}
 */
interface AllowedMentions {
  /** An array of allowed mention types to parse from the content. */
  parse?: AllowedMentionTypes[];
  /** Array of role_ids to mention (Max size of 100) */
  roles?: string[];
  /** Array of user_ids to mention (Max size of 100) */
  users?: string[];
  /** For replies, whether to mention the author of the message being replied to (default false) */
  replied_user?: boolean;
}
