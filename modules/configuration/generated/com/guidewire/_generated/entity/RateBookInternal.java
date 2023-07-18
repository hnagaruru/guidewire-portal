package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateBook.eti;RateBook.eix;RateBook.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RateBookInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire.pc.domain.rating.RateBookPublicMethods, com.guidewire.pc.domain.rating.impl.RateBookInternalMethods, com.guidewire.pl.system.bundle.UpdateCallback {
  /**
   * Adds the given element to the BookDesc_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBookDesc_L10N_ARRAY(entity.RateBook_BookDesc_L10N element);
  
  
  /**
   * Adds the given element to the BookName_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToBookName_L10N_ARRAY(entity.RateBook_BookName_L10N element);
  
  
  /**
   * Adds the given element to the RateBookCalcRoutines array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRateBookCalcRoutines(entity.RateBookCalcRoutine element);
  
  
  /**
   * Adds the given element to the RateBookExportResults array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRateBookExportResults(entity.RateBookExportResult element);
  
  
  /**
   * Adds the given element to the RateTables array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRateTables(entity.RateTable element);
  
  
  /**
   * Adds the given element to the Ratebooks array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRatebooks(entity.ImpactTestingRateBook element);
  
  
  /**
   * Gets the value of the BookCode field.
   * The rate book code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBookCode();
  
  
  /**
   * Gets the value of the BookDesc field.
   * Optional detailed description of the rate book.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBookDesc();
  
  
  /**
   * Gets the value of the BookDesc_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateBook_BookDesc_L10N[] getBookDesc_L10N_ARRAY();
  
  
  /**
   * Array association for partition BookDesc_L10N_ARRAYByLanguage on array BookDesc_L10N_ARRAY
   */
  public entity.RateBook_BookDesc_L10N getBookDesc_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the BookEdition field.
   * The edition of the rate book. This, combined with the 'BookName', identifies the rate book to the user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBookEdition();
  
  
  /**
   * Gets the value of the BookGroup field.
   * Tag used for grouping RateBooks; used in RateBook lookup relaxation ordering.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBookGroup();
  
  
  /**
   * Gets the value of the BookJurisdiction field.
   * The Jurisdiction this books applies to; countrywide is null
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getBookJurisdiction();
  
  
  /**
   * Gets the value of the BookName field.
   * The name of the rate book. This, combined with the 'BookEdition', identifies the rate book to the user.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBookName();
  
  
  /**
   * Gets the value of the BookName_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateBook_BookName_L10N[] getBookName_L10N_ARRAY();
  
  
  /**
   * Array association for partition BookName_L10N_ARRAYByLanguage on array BookName_L10N_ARRAY
   */
  public entity.RateBook_BookName_L10N getBookName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the BookOffering field.
   * The offering this books applies to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBookOffering();
  
  
  /**
   * Gets the value of the EffectiveDate field.
   * The earliest policy effective date that can be rated using this rate book
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveDate();
  
  
  /**
   * Gets the value of the ExpirationDate field.
   * The latest policy effective date that can be rated using this rate book
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExpirationDate();
  
  
  /**
   * Gets the value of the LastStatusChangeDate field.
   * The (calendar) date of the last Status change
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLastStatusChangeDate();
  
  
  /**
   * Gets the value of the LastTableRowEdit field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLastTableRowEdit();
  
  
  /**
   * Gets the value of the PolicyLine field.
   * Code of the Policy Line that the rate table belongs to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyLine();
  
  
  /**
   * Gets the value of the RateBookCalcRoutines field.
   * Which rate routines are used in this rate book
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateBookCalcRoutine[] getRateBookCalcRoutines();
  
  
  /**
   * Gets the value of the RateBookExportResults field.
   * List of rate book export results
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateBookExportResult[] getRateBookExportResults();
  
  
  /**
   * Gets the value of the RateTables field.
   * Which logical rate tables are in this rate book
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTable[] getRateTables();
  
  
  /**
   * Gets the value of the Ratebooks field.
   * Array of test cases to which this ratebook belongs.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ImpactTestingRateBook[] getRatebooks();
  
  
  /**
   * Gets the value of the RenewalEffectiveDate field.
   * The earliest policy renewal effective date that can be rated using this rate book
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getRenewalEffectiveDate();
  
  
  /**
   * Gets the value of the Status field.
   * The status determines things such as whether the rate book may be changed or be brought back into an editable state, whether it has been approved for production, and whether it has been put into production.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RateBookStatus getStatus();
  
  
  /**
   * Gets the value of the UWCompany field.
   * The Underwriting company that insures policies that are rated using this book.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWCompany getUWCompany();
  
  
  public gw.pl.persistence.core.Key getUWCompanyID();
  
  
  /**
   * Gets the value of the CascadedLookup field.
   * If it is true we continue to look past this ratebook for rateTables and rateRoutines
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCascadedLookup();
  
  
  /**
   * Gets the value of the ExportLock field.
   * Indicates that this ratebook is being exported, so it's locked to prevent edits
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isExportLock();
  
  
  /**
   * Removes the given element from the BookDesc_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromBookDesc_L10N_ARRAY(entity.RateBook_BookDesc_L10N element);
  
  
  /**
   * Removes the given element from the BookDesc_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBookDesc_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the BookName_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromBookName_L10N_ARRAY(entity.RateBook_BookName_L10N element);
  
  
  /**
   * Removes the given element from the BookName_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromBookName_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RateBookCalcRoutines array. This is achieved by marking the element for removal.
   */
  public void removeFromRateBookCalcRoutines(entity.RateBookCalcRoutine element);
  
  
  /**
   * Removes the given element from the RateBookCalcRoutines array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRateBookCalcRoutines(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RateBookExportResults array. This is achieved by marking the element for removal.
   */
  public void removeFromRateBookExportResults(entity.RateBookExportResult element);
  
  
  /**
   * Removes the given element from the RateBookExportResults array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRateBookExportResults(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RateTables array. This is achieved by marking the element for removal.
   */
  public void removeFromRateTables(entity.RateTable element);
  
  
  /**
   * Removes the given element from the RateTables array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRateTables(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Ratebooks array. This is achieved by marking the element for removal.
   */
  public void removeFromRatebooks(entity.ImpactTestingRateBook element);
  
  
  /**
   * Removes the given element from the Ratebooks array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRatebooks(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BookCode field.
   */
  public void setBookCode(java.lang.String value);
  
  
  /**
   * Sets the value of the BookDesc field.
   */
  public void setBookDesc(java.lang.String value);
  
  
  /**
   * Sets the value of the BookDesc_L10N_ARRAY field.
   */
  public void setBookDesc_L10N_ARRAY(entity.RateBook_BookDesc_L10N[] value);
  
  
  /**
   * Sets the value of the BookEdition field.
   */
  public void setBookEdition(java.lang.String value);
  
  
  /**
   * Sets the value of the BookGroup field.
   */
  public void setBookGroup(java.lang.String value);
  
  
  /**
   * Sets the value of the BookJurisdiction field.
   */
  public void setBookJurisdiction(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the BookName field.
   */
  public void setBookName(java.lang.String value);
  
  
  /**
   * Sets the value of the BookName_L10N_ARRAY field.
   */
  public void setBookName_L10N_ARRAY(entity.RateBook_BookName_L10N[] value);
  
  
  /**
   * Sets the value of the BookOffering field.
   */
  public void setBookOffering(java.lang.String value);
  
  
  /**
   * Sets the value of the CascadedLookup field.
   */
  public void setCascadedLookup(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the EffectiveDate field.
   */
  public void setEffectiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the ExpirationDate field.
   */
  public void setExpirationDate(java.util.Date value);
  
  
  /**
   * Sets the value of the ExportLock field.
   */
  public void setExportLock(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LastStatusChangeDate field.
   */
  public void setLastStatusChangeDate(java.util.Date value);
  
  
  /**
   * Sets the value of the LastTableRowEdit field.
   */
  public void setLastTableRowEdit(java.util.Date value);
  
  
  /**
   * Sets the value of the PolicyLine field.
   */
  public void setPolicyLine(java.lang.String value);
  
  
  /**
   * Sets the value of the RateBookCalcRoutines field.
   */
  public void setRateBookCalcRoutines(entity.RateBookCalcRoutine[] value);
  
  
  /**
   * Sets the value of the RateBookExportResults field.
   */
  public void setRateBookExportResults(entity.RateBookExportResult[] value);
  
  
  /**
   * Sets the value of the RateTables field.
   */
  public void setRateTables(entity.RateTable[] value);
  
  
  /**
   * Sets the value of the Ratebooks field.
   */
  public void setRatebooks(entity.ImpactTestingRateBook[] value);
  
  
  /**
   * Sets the value of the RenewalEffectiveDate field.
   */
  public void setRenewalEffectiveDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.RateBookStatus value);
  
  
  /**
   * Sets the value of the UWCompany field.
   */
  public void setUWCompany(entity.UWCompany value);
  
  
  public void setUWCompanyID(gw.pl.persistence.core.Key value);
  
  
  
}