package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FormPatternProduct.eti;FormPatternProduct.eix;FormPatternProduct.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface FormPatternProductInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the FormPattern field.
   * The form pattern containing this product
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPattern getFormPattern();
  
  
  public gw.pl.persistence.core.Key getFormPatternID();
  
  
  /**
   * Gets the value of the ProductCode field.
   * The product's code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductCode();
  
  
  /**
   * Sets the value of the FormPattern field.
   */
  public void setFormPattern(entity.FormPattern value);
  
  
  public void setFormPatternID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ProductCode field.
   */
  public void setProductCode(java.lang.String value);
  
  
  
}