// =============================================
// Gudang Sparepart - PT. Tigermandiri Pratama
// =============================================
var SUPABASE_URL = 'https://ssmwxtizalvubwmbvxxr.supabase.co'
var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzbXd4dGl6YWx2dWJ3bWJ2eHhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMjYwMDUsImV4cCI6MjA5MTgwMjAwNX0.CZiN998WoV5ghRH2VXXDSAGs0o_sMj4zlWm8q9ID_TI'

if (typeof supabase === 'undefined') {
  var supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
}
