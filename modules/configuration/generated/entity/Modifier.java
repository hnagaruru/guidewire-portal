package entity;

/**
 * Modifier
 * Modifiers capture information relevant to the pricing of a policy that is not necessarily tied to a specific coverable or coverage.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Modifier.eti;Modifier.eix;Modifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface Modifier extends entity.EffDated {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Modifier> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Modifier>("entity.Modifier");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BOOLEANMODIFIER_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("BooleanModifier", "BooleanModifier");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATEMODIFIER_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("DateModifier", "DateModifier");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ELIGIBLE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("Eligible", "Eligible");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> JUSTIFICATION_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("Justification", "Justification");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PATTERNCODE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("PatternCode", "PatternCode");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RATEMODIFIER_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("RateModifier", "RateModifier");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REFERENCEDATEINTERNAL_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ReferenceDateInternal", "ReferenceDateInternal");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STATE_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("State", "State");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TYPEKEYMODIFIER_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("TypeKeyModifier", "TypeKeyModifier");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> VALUEFINAL_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ValueFinal", "ValueFinal");
  
  public void addToRateFactors(entity.RateFactor element);
  
  
  /**
   * Checks against the product model to find all issues involving rate factors on this modifier. None of the
   * actions involved will be taken at this point; this will just return information about any potential problems.
   * @param modifiable the owning modifiable
   * @return list of ProductModelSyncIssues
   */
  public java.util.List<? extends gw.api.web.productmodel.ProductModelSyncIssue> checkRateFactorsAgainstProductModel(entity.Modifiable modifiable);
  
  
  /**
   * Sets the ReferenceDateInternal field of this modifier to null so {@link #getReferenceDate()}
   * will compute the reference date based on the current policy data rather than returning the
   * field's value. This is meant to be called only upon creating a new policy term (e.g., in a
   * renewal job), when the reference dates must be recalculated.
   */
  public void clearReferenceDateInternal();
  
  
  /**
   * Stores the current value of getReferenceDate() in the ReferenceDateInternal field of this
   * modifier if the field is not already set, and does nothing otherwise. This is meant to be
   * called only upon binding a policy period.
   */
  public void denormalizeReferenceDate();
  
  
  /**
   * Returns the data type this modifier contains.
   * @return the data type of the modifier
   */
  public typekey.ModifierDataType getDataType();
  
  
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
   * Returns the maximum value allowed for this modifier. If a max value is defined for the state of this modifier,
   * that value is returned otherwise the default max value is returned.
   * @return the maximum value allowed
   */
  public java.math.BigDecimal getMaximum();
  
  
  /**
   * Returns the minimum value allowed for this modifier. If a min value is defined for the state of this modifier,
   * that value is returned otherwise the default min value is returned.
   * @return the minimum value allowed
   */
  public java.math.BigDecimal getMinimum();
  
  
  /**
   * Returns the PublicID of this Modifier's pattern. Each product model
   * pattern entity defines a type, and its PublicID is the unique name
   * of that type.
   * @return the PublicID of this Modifier's pattern
   */
  public java.lang.String getModifierType();
  
  
  public entity.Modifiable getOwningModifiable();
  
  
  /**
   * 
   * @return the pattern of this modifier
   */
  public gw.api.productmodel.ModifierPatternBase getPattern();
  
  
  /**
   * Gets the value of the PatternCode field.
   * The pattern defining what kind of Modifier this is
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternCode();
  
  
  /**
   * Returns the first RateFactor in this modifier which matches the given type, or null if none is found.
   * @param type the type of the rate factor to retrieve
   * @return the first rate factor of the given type
   */
  public entity.RateFactor getRateFactor(typekey.RateFactorType type);
  
  
  public entity.RateFactor[] getRateFactors();
  
  
  /**
   * Gets the value of the RateModifier field.
   * Rate modifier. Use the setRateWithinLimits method to set value within min/max limits.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getRateModifier();
  
  
  /**
   * Gets the value of the RateModifier property.
   * @return BigDecimal the value of the RateModifier
   */
  public java.math.BigDecimal getRateWithinLimits();
  
  
  /**
   * Invokes {@link gw.plugin.productmodel.IReferenceDatePlugin} to compute the reference date
   * of this modifier.
   * @return the reference date of this modifier
   */
  public java.util.Date getReferenceDate();
  
  
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
   * 
   * @return the typelist used by the modifier. Throws if the data type is not "TYPELIST"
   */
  public java.lang.String getTypeList();
  
  
  /**
   * 
   * @return true if this modifier has any rate factors
   */
  public boolean hasRateFactors();
  
  
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
   * Indicates if this Modifier is a schedule rate.
   * @return boolean
   */
  public boolean isScheduleRate();
  
  
  /**
   * Gets the value of the ValueFinal field.
   * Whether this modifier's value is final or not
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isValueFinal();
  
  
  public void removeFromRateFactors(entity.RateFactor element);
  
  
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
   * Sets the value of the RateModifier field.
   */
  public void setRateModifier(java.math.BigDecimal value);
  
  
  /**
   * Sets the rate factor's Assessment property to the given value, restricting the value as necessary within the
   * minimum/maximum limits established in the product model. If the value is below the minimum limit, the value is
   * set with the minimum; likewise, if the value is above the maximum limit, the value is set with the
   * the maximum.
   * @param value - the value to be assigned
   */
  public void setRateWithinLimits(java.math.BigDecimal value);
  
  
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
  
  
  /**
   * Checks against the product model and syncs all issues found involving rate factors on this modifier.
   * @param modifiable the owning modifiable
   */
  public void syncRateFactorsWithProductModel(entity.Modifiable modifiable);
  
  
  /**
   * Updates the rate modifier value from the underlying rate factor array.  Resets the rate modifier to 0 before
   * beginning calculation, so any values set directly will be overwritten by what is found in the rate factors array.
   */
  public void updateRateModifierFromRateFactors();
  
  
  
}