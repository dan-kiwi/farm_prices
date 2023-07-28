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
      feedback: {
        Row: {
          created_at: string | null
          email: string | null
          id: number
          message: string | null
          name: string | null
          subject: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: number
          message?: string | null
          name?: string | null
          subject?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: number
          message?: string | null
          name?: string | null
          subject?: string | null
        }
        Relationships: []
      }
      prices_cereal: {
        Row: {
          business_name: string | null
          created_at: string | null
          current: boolean | null
          farm_to_farm: boolean
          id: number
          post_code: number | null
          price: number
          region: number
          sale_date: string
          user_id: string | null
          variety: string
          verified: boolean
        }
        Insert: {
          business_name?: string | null
          created_at?: string | null
          current?: boolean | null
          farm_to_farm: boolean
          id?: number
          post_code?: number | null
          price: number
          region: number
          sale_date: string
          user_id?: string | null
          variety: string
          verified?: boolean
        }
        Update: {
          business_name?: string | null
          created_at?: string | null
          current?: boolean | null
          farm_to_farm?: boolean
          id?: number
          post_code?: number | null
          price?: number
          region?: number
          sale_date?: string
          user_id?: string | null
          variety?: string
          verified?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "prices_cereal_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      prices_current: {
        Row: {
          created_at: string | null
          price: number | null
          region_item_variety: string
        }
        Insert: {
          created_at?: string | null
          price?: number | null
          region_item_variety: string
        }
        Update: {
          created_at?: string | null
          price?: number | null
          region_item_variety?: string
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
          post_code: number
          price: number
          region: string
          sale_date: string
          user_id: string | null
          variety: string
          verified: boolean
        }
        Insert: {
          business_name?: string | null
          created_at?: string | null
          farm_to_farm: boolean
          id?: number
          item: string
          post_code: number
          price: number
          region: string
          sale_date: string
          user_id?: string | null
          variety: string
          verified?: boolean
        }
        Update: {
          business_name?: string | null
          created_at?: string | null
          farm_to_farm?: boolean
          id?: number
          item?: string
          post_code?: number
          price?: number
          region?: string
          sale_date?: string
          user_id?: string | null
          variety?: string
          verified?: boolean
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
