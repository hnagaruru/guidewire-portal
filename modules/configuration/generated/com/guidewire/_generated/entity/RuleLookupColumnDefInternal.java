package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RuleLookupColumnDef.eti;RuleLookupColumnDef.eix;RuleLookupColumnDef.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RuleLookupColumnDefInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the ColumnID field.
   * Lookup table input column identifier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getColumnID();
  
  
  /**
   * Gets the value of the ColumnType field.
   * Lookup Column DataType
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getColumnType();
  
  
  /**
   * Gets the value of the RuleLookupRequestDef field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RuleLookupRequestDef getRuleLookupRequestDef();
  
  
  public gw.pl.persistence.core.Key getRuleLookupRequestDefID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RuleLookupColumnDef getSubtype();
  
  
  /**
   * Sets the value of the ColumnID field.
   */
  public void setColumnID(java.lang.String value);
  
  
  /**
   * Sets the value of the ColumnType field.
   */
  public void setColumnType(java.lang.String value);
  
  
  /**
   * Sets the value of the RuleLookupRequestDef field.
   */
  public void setRuleLookupRequestDef(entity.RuleLookupRequestDef value);
  
  
  public void setRuleLookupRequestDefID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.RuleLookupColumnDef value);
  
  
  
}