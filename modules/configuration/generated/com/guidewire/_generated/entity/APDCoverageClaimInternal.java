package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDCoverageClaim.eti;APDCoverageClaim.eix;APDCoverageClaim.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDCoverageClaimInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the ClaimCostCategory field.
   * A claim cost allowed for the coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClaimCostCategory getClaimCostCategory();
  
  
  public gw.pl.persistence.core.Key getClaimCostCategoryID();
  
  
  /**
   * Gets the value of the Coverage field.
   * The coverage that can have the given cost category on a claim
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverage getCoverage();
  
  
  public gw.pl.persistence.core.Key getCoverageID();
  
  
  /**
   * Sets the value of the ClaimCostCategory field.
   */
  public void setClaimCostCategory(entity.APDClaimCostCategory value);
  
  
  public void setClaimCostCategoryID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Coverage field.
   */
  public void setCoverage(entity.APDCoverage value);
  
  
  public void setCoverageID(gw.pl.persistence.core.Key value);
  
  
  
}