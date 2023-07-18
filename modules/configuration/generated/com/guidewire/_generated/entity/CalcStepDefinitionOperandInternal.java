package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CalcStepDefinitionOperand.eti;CalcStepDefinitionOperand.eix;CalcStepDefinitionOperand.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CalcStepDefinitionOperandInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.CalcStepValueDelegateInternal, com.guidewire.pc.domain.rating.flow.CalcStepValueDelegateAdapter {
  /**
   * Adds the given element to the ArgumentSources array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToArgumentSources(entity.CalcStepDefinitionArgument element);
  
  
  /**
   * Adds the given element to the ReturnFactorColumns array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToReturnFactorColumns(entity.CalcStepDefinitionRateFactor element);
  
  
  /**
   * Gets the value of the ArgumentSourceSetCode field.
   * If this does a table lookup, code for the argument source set used
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getArgumentSourceSetCode();
  
  
  /**
   * Gets the value of the ArgumentSources field.
   * The Argument Sources being used for this operand
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CalcStepDefinitionArgument[] getArgumentSources();
  
  
  /**
   * Gets the value of the CalcStep field.
   * The calculation step definition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CalcStepDefinition getCalcStep();
  
  
  public gw.pl.persistence.core.Key getCalcStepID();
  
  
  /**
   * Gets the value of the FunctionName field.
   * If this does a function call, name of the function called
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFunctionName();
  
  
  /**
   * Gets the value of the LeftParenthesisGroup field.
   * Left Parenthesis String Group
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLeftParenthesisGroup();
  
  
  /**
   * Gets the value of the OperandOrder field.
   * The sort order.  Only used for conditionals, because they are the only thing that uses multiple operands
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getOperandOrder();
  
  
  /**
   * Gets the value of the OperatorType field.
   * The operator used during calculation routine.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.CalcStepOperatorType getOperatorType();
  
  
  /**
   * Gets the value of the ReturnFactorColumns field.
   * The set of factor column names to return for a rate table operand.  An empty array implies returning the factor with the highest priority
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CalcStepDefinitionRateFactor[] getReturnFactorColumns();
  
  
  /**
   * Gets the value of the RightParenthesisGroup field.
   * Right Parenthesis String Group
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRightParenthesisGroup();
  
  
  /**
   * Gets the value of the RoundingScaleType field.
   * The rounding level of the operand, if any.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RoundingScaleType getRoundingScaleType();
  
  
  /**
   * Gets the value of the TableCode field.
   * If this does a table lookup, code for the table used for the lookup
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTableCode();
  
  
  /**
   * Gets the value of the LogicalNot field.
   * A flag that indicates logical negation if the operand is boolean
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLogicalNot();
  
  
  /**
   * Removes the given element from the ArgumentSources array. This is achieved by marking the element for removal.
   */
  public void removeFromArgumentSources(entity.CalcStepDefinitionArgument element);
  
  
  /**
   * Removes the given element from the ArgumentSources array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromArgumentSources(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ReturnFactorColumns array. This is achieved by marking the element for removal.
   */
  public void removeFromReturnFactorColumns(entity.CalcStepDefinitionRateFactor element);
  
  
  /**
   * Removes the given element from the ReturnFactorColumns array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromReturnFactorColumns(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ArgumentSourceSetCode field.
   */
  public void setArgumentSourceSetCode(java.lang.String value);
  
  
  /**
   * Sets the value of the ArgumentSources field.
   */
  public void setArgumentSources(entity.CalcStepDefinitionArgument[] value);
  
  
  /**
   * Sets the value of the CalcStep field.
   */
  public void setCalcStep(entity.CalcStepDefinition value);
  
  
  public void setCalcStepID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the FunctionName field.
   */
  public void setFunctionName(java.lang.String value);
  
  
  /**
   * Sets the value of the LeftParenthesisGroup field.
   */
  public void setLeftParenthesisGroup(java.lang.String value);
  
  
  /**
   * Sets the value of the LogicalNot field.
   */
  public void setLogicalNot(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the OperandOrder field.
   */
  public void setOperandOrder(java.lang.Integer value);
  
  
  /**
   * Sets the value of the OperatorType field.
   */
  public void setOperatorType(typekey.CalcStepOperatorType value);
  
  
  /**
   * Sets the value of the ReturnFactorColumns field.
   */
  public void setReturnFactorColumns(entity.CalcStepDefinitionRateFactor[] value);
  
  
  /**
   * Sets the value of the RightParenthesisGroup field.
   */
  public void setRightParenthesisGroup(java.lang.String value);
  
  
  /**
   * Sets the value of the RoundingScaleType field.
   */
  public void setRoundingScaleType(typekey.RoundingScaleType value);
  
  
  /**
   * Sets the value of the TableCode field.
   */
  public void setTableCode(java.lang.String value);
  
  
  
}