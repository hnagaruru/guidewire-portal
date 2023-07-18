package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CoverageRateFactor.eti;CoverageRateFactor.eix;CoverageRateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CoverageRateFactorInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the CovCode field.
   * Coverage Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCovCode();
  
  
  /**
   * Gets the value of the CovTermCode field.
   * Coverage Term Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCovTermCode();
  
  
  /**
   * Gets the value of the CovTermOptCode field.
   * Coverage Term Option Code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCovTermOptCode();
  
  
  /**
   * Gets the value of the Factor field.
   * Factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getFactor();
  
  
  /**
   * Gets the value of the Jurisdiction field.
   * Jurisdiction
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getJurisdiction();
  
  
  /**
   * Gets the value of the RateTable field.
   * Associated logical rate table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTable getRateTable();
  
  
  public gw.pl.persistence.core.Key getRateTableID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CoverageRateFactor getSubtype();
  
  
  /**
   * Sets the value of the CovCode field.
   */
  public void setCovCode(java.lang.String value);
  
  
  /**
   * Sets the value of the CovTermCode field.
   */
  public void setCovTermCode(java.lang.String value);
  
  
  /**
   * Sets the value of the CovTermOptCode field.
   */
  public void setCovTermOptCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Factor field.
   */
  public void setFactor(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(java.lang.String value);
  
  
  /**
   * Sets the value of the RateTable field.
   */
  public void setRateTable(entity.RateTable value);
  
  
  public void setRateTableID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.CoverageRateFactor value);
  
  
  
}