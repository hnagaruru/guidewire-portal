package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Exclusion.eti;Exclusion.eix;Exclusion.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ExclusionInternal extends com.guidewire._generated.entity.ClauseInternal, com.guidewire.pc.domain.coverage.ExclusionPublicMethods, com.guidewire.pc.domain.coverage.impl.ExclusionInternalMethods, gw.api.domain.Clause, gw.api.domain.ExclusionAdapter {
  /**
   * Gets the value of the Currency field.
   * Currency associated with the Exclusion
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCurrency();
  
  
  /**
   * Gets the value of the PatternCode field.
   * The pattern defining what kind of Exclusion this is
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPatternCode();
  
  
  /**
   * Gets the value of the ReferenceDateInternal field.
   * Internal field for storing the reference date of coverages on bound policy periods. Normally the ReferenceDate property should be used instead.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getReferenceDateInternal();
  
  
  /**
   * Sets the value of the Currency field.
   */
  public void setCurrency(typekey.Currency value);
  
  
  /**
   * Sets the value of the PatternCode field.
   */
  public void setPatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the ReferenceDateInternal field.
   */
  public void setReferenceDateInternal(java.util.Date value);
  
  
  
}