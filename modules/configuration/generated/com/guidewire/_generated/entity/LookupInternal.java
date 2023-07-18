package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Lookup.eti;Lookup.eix;Lookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface LookupInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal, com.guidewire.pc.domain.productmodel.impl.LookupInternalMethods {
  /**
   * Gets the value of the EndEffectiveDate field.
   * The last day, exclusive, the rule is effective
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEndEffectiveDate();
  
  
  /**
   * Gets the value of the LookupTableCode field.
   * The code of the LookupTable that contains this lookup
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLookupTableCode();
  
  
  /**
   * Gets the value of the StartEffectiveDate field.
   * The first day, inclusive, the rule is effective
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getStartEffectiveDate();
  
  
  /**
   * Sets the value of the EndEffectiveDate field.
   */
  public void setEndEffectiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the LookupTableCode field.
   */
  public void setLookupTableCode(java.lang.String value);
  
  
  /**
   * Sets the value of the StartEffectiveDate field.
   */
  public void setStartEffectiveDate(java.util.Date value);
  
  
  
}