package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FormPatternLookup.eti;FormPatternLookup.eix;FormPatternLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface FormPatternLookupInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the Availability field.
   * Specifies whether this lookup is an inclusion or exclusion for the FormPattern whose availability is being computed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AvailabilityType getAvailability();
  
  
  /**
   * Gets the value of the EndEffectiveDate field.
   * The last day, exclusive, the rule is effective
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEndEffectiveDate();
  
  
  /**
   * Gets the value of the FormPattern field.
   * The form pattern containing this lookup
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPattern getFormPattern();
  
  
  public gw.pl.persistence.core.Key getFormPatternID();
  
  
  /**
   * Gets the value of the Jurisdiction field.
   * The jurisdiction for which this lookup applies, or null if the lookup is not restricted by jurisdiction
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getJurisdiction();
  
  
  /**
   * Gets the value of the StartEffectiveDate field.
   * The first day, inclusive, the rule is effective
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getStartEffectiveDate();
  
  
  /**
   * Gets the value of the UWCompanyCode field.
   * The underwriting company for which this lookup applies, or null if the lookup is not restricted by underwriting company
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UWCompanyCode getUWCompanyCode();
  
  
  /**
   * Sets the value of the Availability field.
   */
  public void setAvailability(typekey.AvailabilityType value);
  
  
  /**
   * Sets the value of the EndEffectiveDate field.
   */
  public void setEndEffectiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the FormPattern field.
   */
  public void setFormPattern(entity.FormPattern value);
  
  
  public void setFormPatternID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the StartEffectiveDate field.
   */
  public void setStartEffectiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the UWCompanyCode field.
   */
  public void setUWCompanyCode(typekey.UWCompanyCode value);
  
  
  
}