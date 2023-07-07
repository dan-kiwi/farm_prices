export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      current_prices: {
        Row: {
          price: number | null
          region: string
          updated_at: string
        }
        Insert: {
          price?: number | null
          region: string
          updated_at?: string
        }
        Update: {
          price?: number | null
          region?: string
          updated_at?: string
        }
        Relationships: []
      }
      prices_canterbury: {
        Row: {
          business_name: string | null
          created_at: string
          farm_to_farm: boolean
          id: number
          item: string
          item_group: string
          post_code: number
          price: number
          sale_date: string
          user_id: string | null
          verified: boolean
        }
        Insert: {
          business_name?: string | null
          created_at?: string
          farm_to_farm: boolean
          id?: number
          item: string
          item_group: string
          post_code: number
          price: number
          sale_date: string
          user_id?: string | null
          verified?: boolean
        }
        Update: {
          business_name?: string | null
          created_at?: string
          farm_to_farm?: boolean
          id?: number
          item?: string
          item_group?: string
          post_code?: number
          price?: number
          sale_date?: string
          user_id?: string | null
          verified?: boolean
        }
        Relationships: []
      }
      prices_unapproved: {
        Row: {
          business_name: string | null
          created_at: string | null
          farm_to_farm: boolean
          id: number
          item: string
          item_group: string
          post_code: number
          price: number
          region: string
          sale_date: string
          user_id: string | null
          verified: boolean
        }
        Insert: {
          business_name?: string | null
          created_at?: string | null
          farm_to_farm: boolean
          id?: number
          item: string
          item_group: string
          post_code: number
          price: number
          region: string
          sale_date: string
          user_id?: string | null
          verified?: boolean
        }
        Update: {
          business_name?: string | null
          created_at?: string | null
          farm_to_farm?: boolean
          id?: number
          item?: string
          item_group?: string
          post_code?: number
          price?: number
          region?: string
          sale_date?: string
          user_id?: string | null
          verified?: boolean
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
