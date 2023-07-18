package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CalcStepDefinition.eti;CalcStepDefinition.eix;CalcStepDefinition.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CalcStepDefinitionInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire.pc.domain.rating.impl.CalcStepDefinitionInternalMethods {
  /**
   * Adds the given element to the Operands array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToOperands(entity.CalcStepDefinitionOperand element);
  
  
  /**
   * Gets the value of the CalcRoutineDefinition field.
   * The calculation routine definition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CalcRoutineDefinition getCalcRoutineDefinition();
  
  
  public gw.pl.persistence.core.Key getCalcRoutineDefinitionID();
  
  
  /**
   * Gets the value of the InScopeParam field.
   * The rate routine param that forms the first part of the in scope value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CalcRoutineParamName getInScopeParam();
  
  
  /**
   * Gets the value of the InScopeValue field.
   * A gosu expression ('dot path') that describes how to access the desired value when the assignment is to an in-scope object (InScopeParam != null)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInScopeValue();
  
  
  /**
   * Gets the value of the Notes field.
   * Line comment for the step
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNotes();
  
  
  /**
   * Gets the value of the Operands field.
   * The operands that are being calculated by the step
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CalcStepDefinitionOperand[] getOperands();
  
  
  /**
   * Gets the value of the SectionComment field.
   * Section comment for the step
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSectionComment();
  
  
  /**
   * Gets the value of the SortOrder field.
   * Sort order of the Calculation Step
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSortOrder();
  
  
  /**
   * Gets the value of the StepType field.
   * The step type for this step.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CalcStepType getStepType();
  
  
  /**
   * Gets the value of the StoreLocation field.
   * If this does a store, the destination of the variable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStoreLocation();
  
  
  /**
   * Gets the value of the StoreType field.
   * For assignment steps, this holds the inscope/store target's type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStoreType();
  
  
  /**
   * Removes the given element from the Operands array. This is achieved by marking the element for removal.
   */
  public void removeFromOperands(entity.CalcStepDefinitionOperand element);
  
  
  /**
   * Removes the given element from the Operands array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromOperands(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CalcRoutineDefinition field.
   */
  public void setCalcRoutineDefinition(entity.CalcRoutineDefinition value);
  
  
  public void setCalcRoutineDefinitionID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the InScopeParam field.
   */
  public void setInScopeParam(typekey.CalcRoutineParamName value);
  
  
  /**
   * Sets the value of the InScopeValue field.
   */
  public void setInScopeValue(java.lang.String value);
  
  
  /**
   * Sets the value of the Notes field.
   */
  public void setNotes(java.lang.String value);
  
  
  /**
   * Sets the value of the Operands field.
   */
  public void setOperands(entity.CalcStepDefinitionOperand[] value);
  
  
  /**
   * Sets the value of the SectionComment field.
   */
  public void setSectionComment(java.lang.String value);
  
  
  /**
   * Sets the value of the SortOrder field.
   */
  public void setSortOrder(java.lang.Integer value);
  
  
  /**
   * Sets the value of the StepType field.
   */
  public void setStepType(typekey.CalcStepType value);
  
  
  /**
   * Sets the value of the StoreLocation field.
   */
  public void setStoreLocation(java.lang.String value);
  
  
  /**
   * Sets the value of the StoreType field.
   */
  public void setStoreType(java.lang.String value);
  
  
  
}