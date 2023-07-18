package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ETLModifierPattern.eti;ETLModifierPattern.eix;ETLModifierPattern.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ETLModifierPatternInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Adds the given element to the RateFactorPatterns array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRateFactorPatterns(entity.ETLRateFactorPattern element);
  
  
  /**
   * Gets the value of the CodeIdentifier field.
   * The CodeIdentifier (human readable) of the source modifier pattern in the product model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeIdentifier();
  
  
  /**
   * Gets the value of the ModifierDataType field.
   * The Data Type of this Modifier pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getModifierDataType();
  
  
  /**
   * Gets the value of the Name field.
   * The Name of this Modifier Pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the PatternID field.
   * The Public ID of the source modifier pattern in the product model
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternID();
  
  
  /**
   * Gets the value of the RateFactorPatterns field.
   * All the Rate Factor Patterns for this ModifierPattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ETLRateFactorPattern[] getRateFactorPatterns();
  
  
  /**
   * Gets the value of the ScheduleRate field.
   * Whether this Modifier Pattern is a ScheduleRate modifier pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getScheduleRate();
  
  
  /**
   * Gets the value of the Typelist field.
   * Name of the typelist associated with this Modifier Pattern (iff ModifierDataType is typekey) 
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTypelist();
  
  
  /**
   * Removes the given element from the RateFactorPatterns array. This is achieved by marking the element for removal.
   */
  public void removeFromRateFactorPatterns(entity.ETLRateFactorPattern element);
  
  
  /**
   * Removes the given element from the RateFactorPatterns array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRateFactorPatterns(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CodeIdentifier field.
   */
  public void setCodeIdentifier(java.lang.String value);
  
  
  /**
   * Sets the value of the ModifierDataType field.
   */
  public void setModifierDataType(java.lang.String value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the PatternID field.
   */
  public void setPatternID(java.lang.String value);
  
  
  /**
   * Sets the value of the RateFactorPatterns field.
   */
  public void setRateFactorPatterns(entity.ETLRateFactorPattern[] value);
  
  
  /**
   * Sets the value of the ScheduleRate field.
   */
  public void setScheduleRate(java.lang.String value);
  
  
  /**
   * Sets the value of the Typelist field.
   */
  public void setTypelist(java.lang.String value);
  
  
  
}