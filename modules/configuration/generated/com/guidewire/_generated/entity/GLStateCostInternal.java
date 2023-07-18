package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLStateCost.eti;GLStateCost.eix;GLStateCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface GLStateCostInternal extends com.guidewire._generated.entity.GLCostInternal, com.guidewire._generated.entity.CostInternal, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the GLState field.
   * The jurisdiction that is covered
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getGLState();
  
  
  /**
   * Gets the value of the StateCostType field.
   * The name of the specific cost
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.GLStateCostType getStateCostType();
  
  
  /**
   * Sets the value of the GLState field.
   */
  public void setGLState(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the StateCostType field.
   */
  public void setStateCostType(typekey.GLStateCostType value);
  
  
  
}