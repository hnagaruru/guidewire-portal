package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Contingency.eti;Contingency.eix;Contingency.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ContingencyInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire.pc.domain.note.NoteContainer, gw.api.domain.document.DocumentContainer {
  /**
   * Adds the given element to the Activities array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToActivities(entity.Activity element);
  
  
  /**
   * Adds the given element to the ContingencyJobs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToContingencyJobs(entity.ContingencyJob element);
  
  
  /**
   * Adds the given element to the Documents array. This is achieved by setting the parent foreign key to this entity instance.
   * @deprecated Use Contingency.queryDocuments(includeHidden) instead. Usage of this property gives access to all Documents without respect user permissions
   */
  @java.lang.Deprecated
  public void addToDocuments(entity.Document element);
  
  
  /**
   * Adds the given element to the Notes array. This is achieved by setting the parent foreign key to this entity instance.
   * @deprecated Use Contingency.queryNotes instead. Usage of this property gives access to all Notes without respect user permissions
   */
  @java.lang.Deprecated
  public void addToNotes(entity.Note element);
  
  
  /**
   * Gets the value of the Action field.
   * The action that will be taken if this contingency is not resolved successfully
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContingencyAction getAction();
  
  
  /**
   * Gets the value of the ActionStartDate field.
   * date when action will be initiated if contingency is still unresolved
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getActionStartDate();
  
  
  /**
   * Gets the value of the Activities field.
   * Activities associated with this Contingency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Activity[] getActivities();
  
  
  /**
   * Gets the value of the CloseDate field.
   * The date when the Contingency was closed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCloseDate();
  
  
  /**
   * Gets the value of the CloseUser field.
   * The user who closed the Contingency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getCloseUser();
  
  
  public gw.pl.persistence.core.Key getCloseUserID();
  
  
  /**
   * Gets the value of the ContingencyJobs field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ContingencyJob[] getContingencyJobs();
  
  
  /**
   * Gets the value of the Description field.
   * description for contingency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Documents field.
   * @deprecated Use Contingency.queryDocuments(includeHidden) instead. Usage of this property gives access to all Documents without respect user permissions
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Document[] getDocuments();
  
  
  /**
   * Gets the value of the DueDate field.
   * Due Date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDueDate();
  
  
  /**
   * Gets the value of the Notes field.
   * @deprecated Use Contingency.queryNotes instead. Usage of this property gives access to all Notes without respect user permissions
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Note[] getNotes();
  
  
  /**
   * Gets the value of the Policy field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy();
  
  
  public gw.pl.persistence.core.Key getPolicyID();
  
  
  /**
   * Gets the value of the PolicyPeriod field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod();
  
  
  public gw.pl.persistence.core.Key getPolicyPeriodID();
  
  
  /**
   * Gets the value of the Status field.
   * Contingency status
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ContingencyStatus getStatus();
  
  
  /**
   * Gets the value of the Title field.
   * title for contingency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTitle();
  
  
  /**
   * Gets the value of the ActionStarted field.
   * true if action has started
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isActionStarted();
  
  
  /**
   * Removes the given element from the Activities array. This is achieved by marking the element for removal.
   */
  public void removeFromActivities(entity.Activity element);
  
  
  /**
   * Removes the given element from the Activities array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromActivities(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ContingencyJobs array. This is achieved by marking the element for removal.
   */
  public void removeFromContingencyJobs(entity.ContingencyJob element);
  
  
  /**
   * Removes the given element from the ContingencyJobs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromContingencyJobs(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Documents array. This is achieved by marking the element for removal.
   * @deprecated Use Contingency.queryDocuments(includeHidden) instead. Usage of this property gives access to all Documents without respect user permissions
   */
  @java.lang.Deprecated
  public void removeFromDocuments(entity.Document element);
  
  
  /**
   * Removes the given element from the Documents array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDocuments(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Notes array. This is achieved by marking the element for removal.
   * @deprecated Use Contingency.queryNotes instead. Usage of this property gives access to all Notes without respect user permissions
   */
  @java.lang.Deprecated
  public void removeFromNotes(entity.Note element);
  
  
  /**
   * Removes the given element from the Notes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromNotes(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Action field.
   */
  public void setAction(typekey.ContingencyAction value);
  
  
  /**
   * Sets the value of the ActionStartDate field.
   */
  public void setActionStartDate(java.util.Date value);
  
  
  /**
   * Sets the value of the ActionStarted field.
   */
  public void setActionStarted(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Activities field.
   */
  public void setActivities(entity.Activity[] value);
  
  
  /**
   * Sets the value of the CloseDate field.
   */
  public void setCloseDate(java.util.Date value);
  
  
  /**
   * Sets the value of the CloseUser field.
   */
  public void setCloseUser(entity.User value);
  
  
  public void setCloseUserID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ContingencyJobs field.
   */
  public void setContingencyJobs(entity.ContingencyJob[] value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Documents field.
   * @deprecated Use Contingency.queryDocuments(includeHidden) instead. Usage of this property gives access to all Documents without respect user permissions
   */
  @java.lang.Deprecated
  public void setDocuments(entity.Document[] value);
  
  
  /**
   * Sets the value of the DueDate field.
   */
  public void setDueDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Notes field.
   * @deprecated Use Contingency.queryNotes instead. Usage of this property gives access to all Notes without respect user permissions
   */
  @java.lang.Deprecated
  public void setNotes(entity.Note[] value);
  
  
  /**
   * Sets the value of the Policy field.
   */
  public void setPolicy(entity.Policy value);
  
  
  public void setPolicyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value);
  
  
  public void setPolicyPeriodID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.ContingencyStatus value);
  
  
  /**
   * Sets the value of the Title field.
   */
  public void setTitle(java.lang.String value);
  
  
  
}