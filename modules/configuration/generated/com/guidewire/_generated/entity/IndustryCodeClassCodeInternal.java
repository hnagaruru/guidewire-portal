package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IndustryCodeClassCode.eti;IndustryCodeClassCode.eix;IndustryCodeClassCode.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface IndustryCodeClassCodeInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the ClassCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPClassCode getClassCode();
  
  
  public gw.pl.persistence.core.Key getClassCodeID();
  
  
  /**
   * Gets the value of the IndustryCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IndustryCode getIndustryCode();
  
  
  public gw.pl.persistence.core.Key getIndustryCodeID();
  
  
  /**
   * Gets the value of the PrimaryClass field.
   * Is this the primary class code for the industry code?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPrimaryClass();
  
  
  /**
   * Gets the value of the PrimaryIndustry field.
   * Is this the primary industry code for the class code?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPrimaryIndustry();
  
  
  /**
   * Sets the value of the ClassCode field.
   */
  public void setClassCode(entity.BOPClassCode value);
  
  
  public void setClassCodeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the IndustryCode field.
   */
  public void setIndustryCode(entity.IndustryCode value);
  
  
  public void setIndustryCodeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PrimaryClass field.
   */
  public void setPrimaryClass(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the PrimaryIndustry field.
   */
  public void setPrimaryIndustry(java.lang.Boolean value);
  
  
  
}