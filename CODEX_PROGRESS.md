# CODEX_PROGRESS

## Current goal
- GitHub Pages向け「獅子獣録」予定表・配信者紹介文ツール。

## Last known status
- 2026-10-09: 実装・ローカル検証完了。ビルド不要の静的サイトとして納品。

## Completed steps
- 週・月、12テンプレート、4色変更、画像/テキストレイヤー、PNG、告知文。
- IndexedDB自動保存、50件の履歴、JSONバックアップと復元。
- 配信者登録、紹介文プレースホルダー、YouTube/Xの任意出力。
- SVG・ICO・Apple touch iconの獅子ファビコン。
- Chromeで主要操作15項目、320px/390px/1440px、保存エラー・元データ保護を確認。
- 透明画像、週間PNGのピクセル一致、6行月、うるう年、入力検証を確認。

## Important findings
- デザインは白基調の業務UI。Airtableを主、Calを補助として参照。
- 外部CDN・ライブラリ・ネットワーク送信なし。データは端末のブラウザ内。
- 1日4予定、30アイテム、50履歴、500期間、1000配信者。復元JSONは100MB以下。
- 週テンプレートはカード/縦列/リスト。月は月曜始まりのカレンダー。
- 長い文字は描画枠で省略。月間は時間・タイトル中心。

## Open issues / next steps
- GitHub Pages公開と公開後の確認。手順はreadme.md。
- iOS Safari実機・実際のクリップボードは未確認。コピー処理はテスト用受け取り先で検証。

## Notes for future Codex sessions
- プレビューとPNGはrenderer.jsの同じ描画処理を使用。
- 保存は直列処理。データ検証はmodel.js。既存の読み取り不能データを上書きしない。
- サイト内の登録・画像をリポジトリへ保存しない。
