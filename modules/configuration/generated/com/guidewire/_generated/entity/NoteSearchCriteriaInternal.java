package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "NoteSearchCriteria.eti;NoteSearchCriteria.eix;NoteSearchCriteria.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface NoteSearchCriteriaInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire.pc.domain.note.impl.NoteSearchCriteriaCoreExtMethods, java.io.Serializable {
  /**
   * Gets the value of the Account field.
   * Account that this note is related to, if any
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Account getAccount();
  
  
  public gw.pl.persistence.core.Key getAccountID();
  
  
  /**
   * Gets the value of the Activity field.
   * Activity note is assigned to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Activity getActivity();
  
  
  public gw.pl.persistence.core.Key getActivityID();
  
  
  /**
   * Gets the value of the Author field.
   * Note author
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getAuthor();
  
  
  public gw.pl.persistence.core.Key getAuthorID();
  
  
  /**
   * Gets the value of the Contingency field.
   * Contingency that this note is related to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contingency getContingency();
  
  
  public gw.pl.persistence.core.Key getContingencyID();
  
  
  /**
   * Gets the value of the DateFrom field.
   * Date From
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateFrom();
  
  
  /**
   * Gets the value of the DateTo field.
   * Date To
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateTo();
  
  
  /**
   * Gets the value of the Job field.
   * Job note is on
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job getJob();
  
  
  public gw.pl.persistence.core.Key getJobID();
  
  
  /**
   * Gets the value of the Language field.
   * Language search
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LanguageType getLanguage();
  
  
  /**
   * Gets the value of the Policy field.
   * Policy note is on
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy();
  
  
  public gw.pl.persistence.core.Key getPolicyID();
  
  
  /**
   * Gets the value of the SortBy field.
   * Options to sort the list of notes
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SortByRange getSortBy();
  
  
  /**
   * Gets the value of the Text field.
   * Text search
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getText();
  
  
  /**
   * Gets the value of the Topic field.
   * Topic search
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.NoteTopicType getTopic();
  
  
  /**
   * Gets the value of the SortAscending field.
   * Sort Ascending or not
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSortAscending();
  
  
  /**
   * Sets the value of the Account field.
   */
  public void setAccount(entity.Account value);
  
  
  public void setAccountID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Activity field.
   */
  public void setActivity(entity.Activity value);
  
  
  public void setActivityID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Author field.
   */
  public void setAuthor(entity.User value);
  
  
  public void setAuthorID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Contingency field.
   */
  public void setContingency(entity.Contingency value);
  
  
  public void setContingencyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the DateFrom field.
   */
  public void setDateFrom(java.util.Date value);
  
  
  /**
   * Sets the value of the DateTo field.
   */
  public void setDateTo(java.util.Date value);
  
  
  /**
   * Sets the value of the Job field.
   */
  public void setJob(entity.Job value);
  
  
  public void setJobID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Language field.
   */
  public void setLanguage(typekey.LanguageType value);
  
  
  /**
   * Sets the value of the Policy field.
   */
  public void setPolicy(entity.Policy value);
  
  
  public void setPolicyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the SortAscending field.
   */
  public void setSortAscending(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the SortBy field.
   */
  public void setSortBy(typekey.SortByRange value);
  
  
  /**
   * Sets the value of the Text field.
   */
  public void setText(java.lang.String value);
  
  
  /**
   * Sets the value of the Topic field.
   */
  public void setTopic(typekey.NoteTopicType value);
  
  
  
}