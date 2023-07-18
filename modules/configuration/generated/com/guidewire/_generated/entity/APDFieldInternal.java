package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDField.eti;APDField.eix;APDField.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDFieldInternal extends com.guidewire._generated.entity.APDAttributeInternal {
  /**
   * Gets the value of the Coverable field.
   * The coverable definition to which this field belongs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverable getCoverable();
  
  
  public gw.pl.persistence.core.Key getCoverableID();
  
  
  /**
   * Gets the value of the Identifier field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIdentifier();
  
  
  /**
   * Sets the value of the Coverable field.
   */
  public void setCoverable(entity.APDCoverable value);
  
  
  public void setCoverableID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Identifier field.
   */
  public void setIdentifier(java.lang.Boolean value);
  
  
  
}