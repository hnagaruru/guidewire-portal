package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IndustryCodeDrivenLookup.eti;IndustryCodeDrivenLookup.eix;IndustryCodeDrivenLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface IndustryCodeDrivenLookupInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal {
  /**
   * Gets the value of the IndustryCode field.
   * The industry code for which this lookup applies, or null if the lookup is not restricted by industry code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IndustryCode getIndustryCode();
  
  
  public gw.pl.persistence.core.Key getIndustryCodeID();
  
  
  /**
   * Sets the value of the IndustryCode field.
   */
  public void setIndustryCode(entity.IndustryCode value);
  
  
  public void setIndustryCodeID(gw.pl.persistence.core.Key value);
  
  
  
}