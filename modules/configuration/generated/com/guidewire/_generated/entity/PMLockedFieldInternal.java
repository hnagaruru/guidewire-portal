package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PMLockedField.eti;PMLockedField.eix;PMLockedField.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PMLockedFieldInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the FieldName field.
   * The name of the field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFieldName();
  
  
  /**
   * Gets the value of the FieldValue field.
   * The required value of the field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFieldValue();
  
  
  /**
   * Gets the value of the PMLockedEntity field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PMLockedEntity getPMLockedEntity();
  
  
  public gw.pl.persistence.core.Key getPMLockedEntityID();
  
  
  /**
   * Sets the value of the FieldName field.
   */
  public void setFieldName(java.lang.String value);
  
  
  /**
   * Sets the value of the FieldValue field.
   */
  public void setFieldValue(java.lang.String value);
  
  
  /**
   * Sets the value of the PMLockedEntity field.
   */
  public void setPMLockedEntity(entity.PMLockedEntity value);
  
  
  public void setPMLockedEntityID(gw.pl.persistence.core.Key value);
  
  
  
}