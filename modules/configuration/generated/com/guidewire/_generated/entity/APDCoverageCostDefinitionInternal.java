package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDCoverageCostDefinition.eti;APDCoverageCostDefinition.eix;APDCoverageCostDefinition.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDCoverageCostDefinitionInternal extends com.guidewire._generated.entity.APDCostDefinitionInternal {
  /**
   * Gets the value of the Coverage field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCoverage getCoverage();
  
  
  public gw.pl.persistence.core.Key getCoverageID();
  
  
  /**
   * Sets the value of the Coverage field.
   */
  public void setCoverage(entity.APDCoverage value);
  
  
  public void setCoverageID(gw.pl.persistence.core.Key value);
  
  
  
}