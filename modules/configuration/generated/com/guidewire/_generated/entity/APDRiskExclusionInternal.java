package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskExclusion.eti;APDRiskExclusion.eix;APDRiskExclusion.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDRiskExclusionInternal extends com.guidewire._generated.entity.APDRiskClauseInternal {
  /**
   * Gets the value of the Exclusion field.
   * The exclusion pattern defining this exclusion
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDExclusion getExclusion();
  
  
  public gw.pl.persistence.core.Key getExclusionID();
  
  
  /**
   * Sets the value of the Exclusion field.
   */
  public void setExclusion(entity.APDExclusion value);
  
  
  public void setExclusionID(gw.pl.persistence.core.Key value);
  
  
  
}