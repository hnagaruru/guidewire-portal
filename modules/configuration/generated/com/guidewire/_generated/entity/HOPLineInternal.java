package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLine.eti;HOPLine.eix;HOPLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPLineInternal extends com.guidewire._generated.entity.PolicyLineInternal, com.guidewire._generated.entity.CoverableInternal, com.guidewire._generated.entity.ModifiableInternal, gw.api.domain.CoverableAdapter, gw.api.domain.ModifiableAdapter, gw.api.policy.PolicyLineJavaMethods {
  /**
   * Adds the given element to the HOPCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPCosts(entity.HOPCost element);
  
  
  /**
   * Adds the given element to the HOPCoverageParts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPCoverageParts(entity.HOPCoveragePart element);
  
  
  /**
   * Adds the given element to the HOPLineConditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPLineConditions(entity.HOPLineCond element);
  
  
  /**
   * Adds the given element to the HOPLineCoverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPLineCoverages(entity.HOPLineCov element);
  
  
  /**
   * Adds the given element to the HOPLineExclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPLineExclusions(entity.HOPLineExcl element);
  
  
  /**
   * Adds the given element to the HOPLineModifiers array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToHOPLineModifiers(entity.HOPLineMod element);
  
  
  /**
   * Gets the value of the HOPCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPCost[] getHOPCosts();
  
  
  /**
   * Gets the value of the HOPCoverageParts field.
   * Coverage Parts for the HOP line
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPCoveragePart[] getHOPCoverageParts();
  
  
  /**
   * Gets the value of the HOPLineConditions field.
   * Line-level conditions for Homeowners
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLineCond[] getHOPLineConditions();
  
  
  /**
   * Gets the value of the HOPLineCoverages field.
   * Line-level coverages for Homeowners
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLineCov[] getHOPLineCoverages();
  
  
  /**
   * Gets the value of the HOPLineExclusions field.
   * Line-level exclusions for Homeowners
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLineExcl[] getHOPLineExclusions();
  
  
  /**
   * Gets the value of the HOPLineModifiers field.
   * Line-level modifiers for Homeowners
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPLineMod[] getHOPLineModifiers();
  
  
  /**
   * Removes the given element from the HOPCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPCosts(entity.HOPCost element);
  
  
  /**
   * Removes the given element from the HOPCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the HOPCoverageParts array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPCoverageParts(entity.HOPCoveragePart element);
  
  
  /**
   * Removes the given element from the HOPCoverageParts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPCoverageParts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the HOPLineConditions array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPLineConditions(entity.HOPLineCond element);
  
  
  /**
   * Removes the given element from the HOPLineConditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPLineConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the HOPLineCoverages array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPLineCoverages(entity.HOPLineCov element);
  
  
  /**
   * Removes the given element from the HOPLineCoverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPLineCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the HOPLineExclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPLineExclusions(entity.HOPLineExcl element);
  
  
  /**
   * Removes the given element from the HOPLineExclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPLineExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the HOPLineModifiers array. This is achieved by marking the element for removal.
   */
  public void removeFromHOPLineModifiers(entity.HOPLineMod element);
  
  
  /**
   * Removes the given element from the HOPLineModifiers array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHOPLineModifiers(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the HOPCosts field.
   */
  public void setHOPCosts(entity.HOPCost[] value);
  
  
  /**
   * Sets the value of the HOPCoverageParts field.
   */
  public void setHOPCoverageParts(entity.HOPCoveragePart[] value);
  
  
  /**
   * Sets the value of the HOPLineConditions field.
   */
  public void setHOPLineConditions(entity.HOPLineCond[] value);
  
  
  /**
   * Sets the value of the HOPLineCoverages field.
   */
  public void setHOPLineCoverages(entity.HOPLineCov[] value);
  
  
  /**
   * Sets the value of the HOPLineExclusions field.
   */
  public void setHOPLineExclusions(entity.HOPLineExcl[] value);
  
  
  /**
   * Sets the value of the HOPLineModifiers field.
   */
  public void setHOPLineModifiers(entity.HOPLineMod[] value);
  
  
  
}