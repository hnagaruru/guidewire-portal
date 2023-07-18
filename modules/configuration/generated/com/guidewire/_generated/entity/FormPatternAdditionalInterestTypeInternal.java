package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FormPatternAdditionalInterestType.eti;FormPatternAdditionalInterestType.eix;FormPatternAdditionalInterestType.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface FormPatternAdditionalInterestTypeInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the AdditionalInterestType field.
   * The Additional Interest Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AdditionalInterestType getAdditionalInterestType();
  
  
  /**
   * Gets the value of the FormPattern field.
   * The form pattern containing this Additional Interest Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPattern getFormPattern();
  
  
  public gw.pl.persistence.core.Key getFormPatternID();
  
  
  /**
   * Sets the value of the AdditionalInterestType field.
   */
  public void setAdditionalInterestType(typekey.AdditionalInterestType value);
  
  
  /**
   * Sets the value of the FormPattern field.
   */
  public void setFormPattern(entity.FormPattern value);
  
  
  public void setFormPatternID(gw.pl.persistence.core.Key value);
  
  
  
}