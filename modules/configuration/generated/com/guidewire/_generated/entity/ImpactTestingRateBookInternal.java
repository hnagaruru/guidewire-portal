package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ImpactTestingRateBook.eti;ImpactTestingRateBook.eix;ImpactTestingRateBook.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ImpactTestingRateBookInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the ImpactTestingTestCase field.
   * The ImpactTestingTestCase which is related to this RateBook.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ImpactTestingTestCase getImpactTestingTestCase();
  
  
  public gw.pl.persistence.core.Key getImpactTestingTestCaseID();
  
  
  /**
   * Gets the value of the RateBook field.
   * The RateBook which is related to this ImpactTestingTestCase.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateBook getRateBook();
  
  
  public gw.pl.persistence.core.Key getRateBookID();
  
  
  /**
   * Sets the value of the ImpactTestingTestCase field.
   */
  public void setImpactTestingTestCase(entity.ImpactTestingTestCase value);
  
  
  public void setImpactTestingTestCaseID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RateBook field.
   */
  public void setRateBook(entity.RateBook value);
  
  
  public void setRateBookID(gw.pl.persistence.core.Key value);
  
  
  
}