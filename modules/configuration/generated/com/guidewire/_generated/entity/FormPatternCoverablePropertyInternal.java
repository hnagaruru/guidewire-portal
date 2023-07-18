package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FormPatternCoverableProperty.eti;FormPatternCoverableProperty.eix;FormPatternCoverableProperty.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface FormPatternCoverablePropertyInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the DataType field.
   * The data type of the coverable's property.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDataType();
  
  
  /**
   * Gets the value of the FormPattern field.
   * The form pattern associated with this coverable property.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPattern getFormPattern();
  
  
  public gw.pl.persistence.core.Key getFormPatternID();
  
  
  /**
   * Gets the value of the Name field.
   * The coverable's property name.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Sets the value of the DataType field.
   */
  public void setDataType(java.lang.String value);
  
  
  /**
   * Sets the value of the FormPattern field.
   */
  public void setFormPattern(entity.FormPattern value);
  
  
  public void setFormPatternID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  
}