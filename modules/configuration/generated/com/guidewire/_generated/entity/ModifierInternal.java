package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Modifier.eti;Modifier.eix;Modifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ModifierInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire.pc.domain.policy.ModifierPublicMethods, com.guidewire.pc.domain.policy.impl.ModifierInternalMethods, gw.api.domain.ModifierAbstractDomainMethods, gw.api.domain.ModifierAdapter {
  /**
   * Gets the value of the DateModifier field.
   * Date modifier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateModifier();
  
  
  /**
   * Gets the value of the Justification field.
   * Additional comment to justify the value of this modifier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getJustification();
  
  
  /**
   * Gets the value of the PatternCode field.
   * The pattern defining what kind of Modifier this is
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternCode();
  
  
  /**
   * Gets the value of the RateModifier field.
   * Rate modifier. Use the setRateWithinLimits method to set value within min/max limits.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getRateModifier();
  
  
  /**
   * Gets the value of the ReferenceDateInternal field.
   * Internal field for storing the reference date of modifiers on bound policy periods. Normally the ReferenceDate property should be used instead.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getReferenceDateInternal();
  
  
  /**
   * Gets the value of the State field.
   * The state to attach rating information to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getState();
  
  
  /**
   * Gets the value of the TypeKeyModifier field.
   * Typekey modifier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTypeKeyModifier();
  
  
  /**
   * Gets the value of the BooleanModifier field.
   * Boolean modifier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isBooleanModifier();
  
  
  /**
   * Gets the value of the Eligible field.
   * Whether this modifier is eligible or not
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isEligible();
  
  
  /**
   * Gets the value of the ValueFinal field.
   * Whether this modifier's value is final or not
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isValueFinal();
  
  
  /**
   * Sets the value of the BooleanModifier field.
   */
  public void setBooleanModifier(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DateModifier field.
   */
  public void setDateModifier(java.util.Date value);
  
  
  /**
   * Sets the value of the Eligible field.
   */
  public void setEligible(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Justification field.
   */
  public void setJustification(java.lang.String value);
  
  
  /**
   * Sets the value of the PatternCode field.
   */
  public void setPatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the RateModifier field.
   */
  public void setRateModifier(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ReferenceDateInternal field.
   */
  public void setReferenceDateInternal(java.util.Date value);
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the TypeKeyModifier field.
   */
  public void setTypeKeyModifier(java.lang.String value);
  
  
  /**
   * Sets the value of the ValueFinal field.
   */
  public void setValueFinal(java.lang.Boolean value);
  
  
  
}