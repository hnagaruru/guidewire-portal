package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateFactor.eti;RateFactor.eix;RateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RateFactorInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire.pc.domain.policy.entity.RateFactorPublicMethods, com.guidewire.pc.domain.policy.impl.RateFactorInternalMethods, gw.api.domain.RateFactorAdapter {
  /**
   * Gets the value of the Assessment field.
   * Credit or debit multiplier for this rate factor. Use the setAssessmentWithinLimits method to set this value within its minimum and maximum.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getAssessment();
  
  
  /**
   * Gets the value of the Justification field.
   * Additional comment to justify this rate factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getJustification();
  
  
  /**
   * Gets the value of the PatternCode field.
   * The pattern used to create this RateFactor that defines its type.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternCode();
  
  
  /**
   * Sets the value of the Assessment field.
   */
  public void setAssessment(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Justification field.
   */
  public void setJustification(java.lang.String value);
  
  
  /**
   * Sets the value of the PatternCode field.
   */
  public void setPatternCode(java.lang.String value);
  
  
  
}