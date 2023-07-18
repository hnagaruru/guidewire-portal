package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDCoreAttribute.eti;APDCoreAttribute.eix;APDCoreAttribute.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDCoreAttributeInternal extends com.guidewire._generated.entity.APDAttributeInternal {
  /**
   * Gets the value of the Coverable field.
   * The entity to which this attribute belongs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverable getCoverable();
  
  
  public gw.pl.persistence.core.Key getCoverableID();
  
  
  /**
   * Gets the value of the FieldType field.
   * The core field
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDCoreFieldType getFieldType();
  
  
  /**
   * Sets the value of the Coverable field.
   */
  public void setCoverable(entity.APDCoverable value);
  
  
  public void setCoverableID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the FieldType field.
   */
  public void setFieldType(typekey.APDCoreFieldType value);
  
  
  
}