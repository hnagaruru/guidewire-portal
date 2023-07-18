package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "FormPatternCovTerm.eti;FormPatternCovTerm.eix;FormPatternCovTerm.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface FormPatternCovTermInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the SelectedCovTermValues array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToSelectedCovTermValues(entity.FormPatternCovTermValue element);
  
  
  /**
   * Gets the value of the CovTermPatternCode field.
   * The code of the covterm pattern associated with the form pattern's selected clause.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCovTermPatternCode();
  
  
  /**
   * Gets the value of the FormPattern field.
   * The form pattern containing this form pattern covterm.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPattern getFormPattern();
  
  
  public gw.pl.persistence.core.Key getFormPatternID();
  
  
  /**
   * Gets the value of the SelectedCovTermValues field.
   * The codes of selected covterm values for this form pattern covterm.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FormPatternCovTermValue[] getSelectedCovTermValues();
  
  
  /**
   * Removes the given element from the SelectedCovTermValues array. This is achieved by marking the element for removal.
   */
  public void removeFromSelectedCovTermValues(entity.FormPatternCovTermValue element);
  
  
  /**
   * Removes the given element from the SelectedCovTermValues array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromSelectedCovTermValues(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CovTermPatternCode field.
   */
  public void setCovTermPatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the FormPattern field.
   */
  public void setFormPattern(entity.FormPattern value);
  
  
  public void setFormPatternID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the SelectedCovTermValues field.
   */
  public void setSelectedCovTermValues(entity.FormPatternCovTermValue[] value);
  
  
  
}