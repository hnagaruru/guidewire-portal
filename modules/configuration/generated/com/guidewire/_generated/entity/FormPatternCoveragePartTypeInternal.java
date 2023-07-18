package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FormPatternCoveragePartType.eti;FormPatternCoveragePartType.eix;FormPatternCoveragePartType.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface FormPatternCoveragePartTypeInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the CoveragePartType field.
   * The coverage part type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CoveragePartType getCoveragePartType();
  
  
  /**
   * Gets the value of the FormPattern field.
   * The form pattern containing this coverage part type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPattern getFormPattern();
  
  
  public gw.pl.persistence.core.Key getFormPatternID();
  
  
  /**
   * Sets the value of the CoveragePartType field.
   */
  public void setCoveragePartType(typekey.CoveragePartType value);
  
  
  /**
   * Sets the value of the FormPattern field.
   */
  public void setFormPattern(entity.FormPattern value);
  
  
  public void setFormPatternID(gw.pl.persistence.core.Key value);
  
  
  
}