package typekey;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BatchProcessType.tti;BatchProcessType.tix;BatchProcessType.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class BatchProcessType implements gw.entity.TypeKey {
  /**
   * AccountHolderCount
   * Adjust AccountHolderCount value on Contact
   */
  public static final typekey.BatchProcessType TC_ACCOUNTHOLDERCOUNT = new typekey.BatchProcessType("AccountHolderCount");
  
  /**
   * Account Withdraw Evaluation
   * Evaluates accounts and closes them.
   */
  public static final typekey.BatchProcessType TC_ACCOUNTWITHDRAW = new typekey.BatchProcessType("AccountWithdraw");
  
  /**
   * Activity Escalation
   * Activity escalation monitor
   */
  public static final typekey.BatchProcessType TC_ACTIVITYESC = new typekey.BatchProcessType("ActivityEsc");
  
  /**
   * Retire Activities
   * Retires canceled activities after configured time
   */
  public static final typekey.BatchProcessType TC_ACTIVITYRETIRE = new typekey.BatchProcessType("ActivityRetire");
  
  /**
   * Apply Pending Account Data Updates
   * Apply any of the pending updates to account data.
   */
  public static final typekey.BatchProcessType TC_APPLYPENDINGACCOUNTDATAUPDATES = new typekey.BatchProcessType("ApplyPendingAccountDataUpdates");
  
  /**
   * Archiving Item Writer
   * Identify archiving work and create work items.
   */
  public static final typekey.BatchProcessType TC_ARCHIVE = new typekey.BatchProcessType("Archive");
  
  /**
   * Archive policy terms
   * Policy term archiving monitor
   */
  public static final typekey.BatchProcessType TC_ARCHIVEPOLICYTERM = new typekey.BatchProcessType("ArchivePolicyTerm");
  
  /**
   * Archive Reference Tracking Sync
   * Ensures that the archive document references table is in sync with the archive store.
   */
  public static final typekey.BatchProcessType TC_ARCHIVEREFERENCETRACKINGSYNC = new typekey.BatchProcessType("ArchiveReferenceTrackingSync");
  
  /**
   * Asynchronous Quoting
   * Quote PolicyPeriods asynchronously
   */
  public static final typekey.BatchProcessType TC_ASYNCQUOTING = new typekey.BatchProcessType("AsyncQuoting");
  
  /**
   * Asynchronous Rating
   * Rate PolicyPeriods asynchronously
   */
  public static final typekey.BatchProcessType TC_ASYNCRATING = new typekey.BatchProcessType("AsyncRating");
  
  /**
   * AuditTask
   * Audit task monitor
   */
  public static final typekey.BatchProcessType TC_AUDITTASK = new typekey.BatchProcessType("AuditTask");
  
  /**
   * BackOutRollingUpgrade
   * Back out a rolling upgrade
   */
  public static final typekey.BatchProcessType TC_BACKOUTROLLINGUPGRADE = new typekey.BatchProcessType("BackOutRollingUpgrade");
  
  /**
   * Business Rules Export/Import
   * Exports and imports business rules
   */
  public static final typekey.BatchProcessType TC_BIZRULESEXPORTIMPORT = new typekey.BatchProcessType("BizRulesExportImport");
  
  /**
   * Business Rules Validator
   * Validates business rules
   */
  public static final typekey.BatchProcessType TC_BIZRULESVALIDATOR = new typekey.BatchProcessType("BizRulesValidator");
  
  /**
   * Bound Policy Exception
   * Policy Exception Monitor for bound policies
   */
  public static final typekey.BatchProcessType TC_BOUNDPOLICYEXCEPTION = new typekey.BatchProcessType("BoundPolicyException");
  
  /**
   * BulkPurge
   * Purge records through table updates
   */
  public static final typekey.BatchProcessType TC_BULKPURGE = new typekey.BatchProcessType("BulkPurge");
  
  /**
   * Bulk Submission Job
   * This job creates documents asynchronously using Bulk API
   */
  public static final typekey.BatchProcessType TC_BULKSUBMISSION = new typekey.BatchProcessType("BulkSubmission");
  
  /**
   * Cleanup AccountContactRole table
   * Delete retired AccountContactRole entitites and any associated AccountContactRoleReplacment entities.
   */
  public static final typekey.BatchProcessType TC_CLEANUPACCOUNTCONTACTROLE = new typekey.BatchProcessType("CleanupAccountContactRole");
  
  /**
   * Cleanup ETLPurgeRoot
   * Deletes records from ETLPurgedRoot table whose purge date exceeds threshold set by the KeepPurgedRootsForDays configuration parameter value
   */
  @java.lang.Deprecated
  public static final typekey.BatchProcessType TC_CLEANUPETLPURGEROOT = new typekey.BatchProcessType("CleanupETLPurgeRoot");
  
  /**
   * Cleanup PurgedRootInfo for personal data
   * Delete records from PurgedRootInfo table whose purge date exceeds threshold set by the KeepPurgedRootsForDays configuration parameter value and PurgeType column has value PersonalData
   */
  public static final typekey.BatchProcessType TC_CLEANUPPURGEDROOTINFO = new typekey.BatchProcessType("CleanupPurgedRootInfo");
  
  /**
   * Closed Policy Exception
   * Policy Exception Monitor for closed policies
   */
  public static final typekey.BatchProcessType TC_CLOSEDPOLICYEXCEPTION = new typekey.BatchProcessType("ClosedPolicyException");
  
  /**
   * ContactAutoSync
   * Automatically synchronize the local contact that are out of syn and marked 'allow' auto-sync.
   */
  public static final typekey.BatchProcessType TC_CONTACTAUTOSYNC = new typekey.BatchProcessType("ContactAutoSync");
  
  /**
   * Loader Create Indexes
   * Recreate perf-only indexes when the loader finishes the big insert/select from staging to operational tables
   */
  public static final typekey.BatchProcessType TC_CREATEPERFONLYINDEXES = new typekey.BatchProcessType("CreatePerfOnlyIndexes");
  
  /**
   * Create UWRules for UWIssueTypes
   * Create a new UWRule for each unmapped UWIssueType for display in the UWRules UI
   */
  public static final typekey.BatchProcessType TC_CREATEUNMAPPEDUWRULES = new typekey.BatchProcessType("CreateUnmappedUWRules");
  
  /**
   * Data Distribution
   * Data distribution for the database
   */
  public static final typekey.BatchProcessType TC_DATADISTRIBUTION = new typekey.BatchProcessType("DataDistribution");
  
  /**
   * Database Consistency Check
   * Database consistency checks
   */
  public static final typekey.BatchProcessType TC_DBCONSISTENCYCHECK = new typekey.BatchProcessType("DBConsistencyCheck");
  
  /**
   * Database statistics
   * Database statistics
   */
  public static final typekey.BatchProcessType TC_DBSTATS = new typekey.BatchProcessType("DBStats");
  
  /**
   * DeferredUpgradeTasks
   * Execute database upgrade tasks that were deferred
   */
  public static final typekey.BatchProcessType TC_DEFERREDUPGRADETASKS = new typekey.BatchProcessType("DeferredUpgradeTasks");
  
  /**
   * Destroy Contact For Personal Data
   * Destroy contacts that have been requested by an external system
   */
  public static final typekey.BatchProcessType TC_DESTROYCONTACTFORPERSONALDATA = new typekey.BatchProcessType("DestroyContactForPersonalData");
  
  /**
   * Extract Rating Worksheets
   * Extract rating worksheet data from WorksheetContainer objects and flag these objects for purging
   */
  public static final typekey.BatchProcessType TC_EXTRACTWORKSHEETS = new typekey.BatchProcessType("ExtractWorksheets");
  
  /**
   * FindUsagesOfUpgradedTypecodes
   * During the back out of a rolling upgrade, looks for typecodes that were inserted during the rolling upgrade. These usages need to be fixed before we can back out.
   */
  public static final typekey.BatchProcessType TC_FINDUSAGESOFUPGRADEDTYPECODES = new typekey.BatchProcessType("FindUsagesOfUpgradedTypecodes");
  
  /**
   * Fix JobGroup on moved policies
   * Fix JobGroup reference on Jobs associated with policies moved between accounts
   */
  public static final typekey.BatchProcessType TC_FIXJOBGROUPONMOVEDPOLICIES = new typekey.BatchProcessType("FixJobGroupOnMovedPolicies");
  
  /**
   * Form Text Data Delete
   * Deletes orphaned, purged, or archived FormTextData
   */
  public static final typekey.BatchProcessType TC_FORMTEXTDATADELETE = new typekey.BatchProcessType("FormTextDataDelete");
  
  /**
   * Geocode Writer
   * Geocoding Addresses queue writer.
   */
  public static final typekey.BatchProcessType TC_GEOCODE = new typekey.BatchProcessType("Geocode");
  
  /**
   * Group Exception
   * Group exception Monitor
   */
  public static final typekey.BatchProcessType TC_GROUPEXCEPTION = new typekey.BatchProcessType("GroupException");
  
  /**
   * Handle Unresolved Contingency
   * Handles all the contingencies which are unresolved
   */
  public static final typekey.BatchProcessType TC_HANDLEUNRESOLVEDCONTINGENCY = new typekey.BatchProcessType("HandleUnresolvedContingency");
  
  /**
   * Impact Testing Export
   * Exports the test periods to Excel
   */
  public static final typekey.BatchProcessType TC_IMPACTTESTINGEXPORT = new typekey.BatchProcessType("ImpactTestingExport");
  
  /**
   * Impact Testing Test Case Preparation
   * Prepares policy periods for impact testing
   */
  public static final typekey.BatchProcessType TC_IMPACTTESTINGTESTPREP = new typekey.BatchProcessType("ImpactTestingTestPrep");
  
  /**
   * Impact Testing Test Case Run
   * Runs the test periods through the rating algorithm
   */
  public static final typekey.BatchProcessType TC_IMPACTTESTINGTESTRUN = new typekey.BatchProcessType("ImpactTestingTestRun");
  
  /**
   * Inbound Chunk Work Queue
   * Custom work queue to process inbound chunks.
   */
  public static final typekey.BatchProcessType TC_INBOUNDCHUNKWQ = new typekey.BatchProcessType("InboundChunkWQ");
  
  /**
   * InboundFileBatchProcess
   * Inbound File Batch Process
   */
  public static final typekey.BatchProcessType TC_INBOUNDFILEBATCHPROCESS = new typekey.BatchProcessType("InboundFileBatchProcess");
  
  /**
   * Inbound File Purge Work Queue
   * Custom work queue to purge inbound file records.
   */
  public static final typekey.BatchProcessType TC_INBOUNDFILEPURGEWQ = new typekey.BatchProcessType("InboundFilePurgeWQ");
  
  /**
   * Job Expiration
   * Expire a job if no action has been taken upon it for a configured period of time.
   */
  public static final typekey.BatchProcessType TC_JOBEXPIRE = new typekey.BatchProcessType("JobExpire");
  
  /**
   * Turn util to Util in ExpressionFragments
   * Look for occurrence of 'util' in CodeExpressionFragment.CodeText and GosuTemplateExpressionFragment.TemplateText and replace with 'Util'
   */
  public static final typekey.BatchProcessType TC_MAKEUPPERCASEUTILINCODEEXPRESSIONFRAGMENTS = new typekey.BatchProcessType("MakeUpperCaseUtilInCodeExpressionFragments");
  
  /**
   * Microsoft Perf Report
   * Microsoft database performance report generation
   */
  public static final typekey.BatchProcessType TC_MSDMVREPORT = new typekey.BatchProcessType("MSDMVReport");
  
  /**
   * Notify External System For Personal Data
   * Picks up all contact destruction tests that are in final state and notifies external system
   */
  public static final typekey.BatchProcessType TC_NOTIFYEXTERNALSYSTEMFORPERSONALDATA = new typekey.BatchProcessType("NotifyExternalSystemForPersonalData");
  
  /**
   * Open Policy Exception
   * Policy Exception Monitor for open policies
   */
  public static final typekey.BatchProcessType TC_OPENPOLICYEXCEPTION = new typekey.BatchProcessType("OpenPolicyException");
  
  /**
   * Oracle AWR Report
   * Oracle database AWR performance report generation
   */
  public static final typekey.BatchProcessType TC_ORAAWRREPORT = new typekey.BatchProcessType("OraAWRReport");
  
  /**
   * OutboundFileBatchProcess
   * Outbound File Batch Process
   */
  public static final typekey.BatchProcessType TC_OUTBOUNDFILEBATCHPROCESS = new typekey.BatchProcessType("OutboundFileBatchProcess");
  
  /**
   * Outbound File Purge Work Queue
   * Custom work queue to purge outbound file records.
   */
  public static final typekey.BatchProcessType TC_OUTBOUNDFILEPURGEWQ = new typekey.BatchProcessType("OutboundFilePurgeWQ");
  
  /**
   * Outbound Record Purge Work Queue
   * Custom work queue to purge skipped outbound records.
   */
  public static final typekey.BatchProcessType TC_OUTBOUNDRECORDPURGEWQ = new typekey.BatchProcessType("OutboundRecordPurgeWQ");
  
  /**
   * Overdue Premium Report
   * Monitor for overdue premium reports
   */
  public static final typekey.BatchProcessType TC_OVERDUEPREMIUMREPORT = new typekey.BatchProcessType("OverduePremiumReport");
  
  /**
   * Phone number normalizer
   * Performs a normalization of phone numbers contact
   */
  public static final typekey.BatchProcessType TC_PHONENUMBERNORMALIZER = new typekey.BatchProcessType("PhoneNumberNormalizer");
  
  /**
   * Policy Hold Job Evaluation
   * Evaluates jobs against the policy holds blocking it
   */
  public static final typekey.BatchProcessType TC_POLICYHOLDJOBEVAL = new typekey.BatchProcessType("PolicyHoldJobEval");
  
  /**
   * PolicyLocationsRiskAssessment
   * Retrieves risk assessments for all the locations on a policy period
   */
  public static final typekey.BatchProcessType TC_POLICYLOCATIONSRISKASSESSMENT = new typekey.BatchProcessType("PolicyLocationsRiskAssessment");
  
  /**
   * Clear Policy Renewal Check Dates
   * Clears existing Policy Renewal Check Dates
   */
  public static final typekey.BatchProcessType TC_POLICYRENEWALCLEARCHECKDATE = new typekey.BatchProcessType("PolicyRenewalClearCheckDate");
  
  /**
   * Policy Renewal Start
   * Policy Renewal Start monitor
   */
  public static final typekey.BatchProcessType TC_POLICYRENEWALSTART = new typekey.BatchProcessType("PolicyRenewalStart");
  
  /**
   * Populate searchColumn columns
   * Populate searchColumn columns from their original sources.
   */
  public static final typekey.BatchProcessType TC_POPULATESEARCHCOLUMNS = new typekey.BatchProcessType("PopulateSearchColumns");
  
  /**
   * PremiumCeding
   * Reinsurance ceding of premium
   */
  public static final typekey.BatchProcessType TC_PREMIUMCEDING = new typekey.BatchProcessType("PremiumCeding");
  
  /**
   * Process Completion Monitor
   * Invoke plugin on completion of monitored worker queue
   */
  public static final typekey.BatchProcessType TC_PROCESSCOMPLETIONMONITOR = new typekey.BatchProcessType("ProcessCompletionMonitor");
  
  /**
   * ProcessHistoryPurge
   * Purge batch process history data
   */
  public static final typekey.BatchProcessType TC_PROCESSHISTORYPURGE = new typekey.BatchProcessType("ProcessHistoryPurge");
  
  /**
   * Product Model Pattern Activation
   * Activate product model patterns after product model rolling upgrade is completed.
   */
  public static final typekey.BatchProcessType TC_PRODUCTMODELPATTERNACTIVATION = new typekey.BatchProcessType("ProductModelPatternActivation");
  
  /**
   * Purge
   * Purges Entities which are no longer needed
   */
  public static final typekey.BatchProcessType TC_PURGE = new typekey.BatchProcessType("Purge");
  
  /**
   * Purge Cluster Members
   * Purge old ClusterMember entities
   */
  public static final typekey.BatchProcessType TC_PURGECLUSTERMEMBERS = new typekey.BatchProcessType("PurgeClusterMembers");
  
  /**
   * Purge Failed Work Items
   * Purge failed work items from all queues.
   */
  public static final typekey.BatchProcessType TC_PURGEFAILEDWORKITEMS = new typekey.BatchProcessType("PurgeFailedWorkItems");
  
  /**
   * Purge Message History
   * Purges old messages from the message history table
   */
  public static final typekey.BatchProcessType TC_PURGEMESSAGEHISTORY = new typekey.BatchProcessType("PurgeMessageHistory");
  
  /**
   * Purge Orphaned Policy Periods
   * Purges policy periods orphaned as a result of preemption
   */
  public static final typekey.BatchProcessType TC_PURGEORPHANEDPOLICYPERIOD = new typekey.BatchProcessType("PurgeOrphanedPolicyPeriod");
  
  /**
   * Purge Profiler Data
   * Purge profiler data at regular intervals
   */
  public static final typekey.BatchProcessType TC_PURGEPROFILERDATA = new typekey.BatchProcessType("PurgeProfilerData");
  
  /**
   * Purge Quote Clones
   * Purge Quote Clones: Purge temporary cloned policy periods
   */
  public static final typekey.BatchProcessType TC_PURGEQUOTECLONES = new typekey.BatchProcessType("PurgeQuoteClones");
  
  /**
   * Purge Rate Book Export Result
   * Purges rate book export results after configured time
   */
  public static final typekey.BatchProcessType TC_PURGERATEBOOKEXPORTRESULT = new typekey.BatchProcessType("PurgeRateBookExportResult");
  
  /**
   * PurgeRiskAssessmentTempStore
   * Purges all temporary risk assessment entities
   */
  public static final typekey.BatchProcessType TC_PURGERISKASSESSMENTTEMPSTORE = new typekey.BatchProcessType("PurgeRiskAssessmentTempStore");
  
  /**
   * Purge Temporary Policy Periods
   * Purge policy periods that are currently in a temporary state
   */
  public static final typekey.BatchProcessType TC_PURGETEMPORARYPOLICYPERIODS = new typekey.BatchProcessType("PurgeTemporaryPolicyPeriods");
  
  /**
   * Purge old transaction ids
   * Purge external transaction id that no longer need to be tracked, by age.
   */
  public static final typekey.BatchProcessType TC_PURGETRANSACTIONIDS = new typekey.BatchProcessType("PurgeTransactionIds");
  
  /**
   * Purge Workflow Logs
   * Purge completed workflows logs, this executes gw.processes.PurgeWorkflowLogs.gs
   */
  public static final typekey.BatchProcessType TC_PURGEWORKFLOWLOGS = new typekey.BatchProcessType("PurgeWorkflowLogs");
  
  /**
   * Purge Workflow
   * Purge completed workflows after resetting any referenced workflows, this executes gw.processes.PurgeWorkflow.gs
   */
  public static final typekey.BatchProcessType TC_PURGEWORKFLOWS = new typekey.BatchProcessType("PurgeWorkflows");
  
  /**
   * Purge Rating Worksheets
   * Purge WorksheetContainer objects
   */
  public static final typekey.BatchProcessType TC_PURGEWORKSHEETS = new typekey.BatchProcessType("PurgeWorksheets");
  
  /**
   * Rate Book Export
   * Exports rate book to an Excel or XML file
   */
  public static final typekey.BatchProcessType TC_RATEBOOKEXPORT = new typekey.BatchProcessType("RateBookExport");
  
  /**
   * Recalculate Contingency Action Start Date
   * Recalculate action start date for all contingencies where action has not started
   */
  public static final typekey.BatchProcessType TC_RECALCULATECONTINGENCYACTIONSTARTDATE = new typekey.BatchProcessType("RecalculateContingencyActionStartDate");
  
  /**
   * Purge Old Contact Destruction Request
   * Remove destruction requests for contacts that have been destroyed.
   */
  public static final typekey.BatchProcessType TC_REMOVEOLDCONTACTDESTRUCTIONREQUEST = new typekey.BatchProcessType("RemoveOldContactDestructionRequest");
  
  /**
   * Reset Purge Status and Check Dates
   * Reset purge status and purge/prune dates on Job
   */
  public static final typekey.BatchProcessType TC_RESETPURGESTATUSANDCHECKDATES = new typekey.BatchProcessType("ResetPurgeStatusAndCheckDates");
  
  /**
   * Retrieve policy terms
   * Policy term retrieve from archive monitor
   */
  public static final typekey.BatchProcessType TC_RESTOREPOLICYTERM = new typekey.BatchProcessType("RestorePolicyTerm");
  
  /**
   * Solr Data Import
   * Performs a full data import of the app database into the Solr/Lucene index
   */
  public static final typekey.BatchProcessType TC_SOLRDATAIMPORT = new typekey.BatchProcessType("SolrDataImport");
  
  /**
   * Staging Table Import
   * Asynchronous operation on staging tables (encrypt, statistics, integrity check, load, delete excluded, populate excluded)
   */
  public static final typekey.BatchProcessType TC_STAGINGTABLEIMPORT = new typekey.BatchProcessType("StagingTableImport");
  
  /**
   * Stat Report Writer
   * Stat Report work queue writer
   */
  public static final typekey.BatchProcessType TC_STATREPORT = new typekey.BatchProcessType("StatReport");
  
  /**
   * Team Screens
   * Collect summary counts for team screens
   */
  public static final typekey.BatchProcessType TC_TEAMSCREENS = new typekey.BatchProcessType("TeamScreens");
  
  /**
   * User Exception
   * User exception Monitor
   */
  public static final typekey.BatchProcessType TC_USEREXCEPTION = new typekey.BatchProcessType("UserException");
  
  /**
   * Workflow
   * Will execute the workflow writer.
   */
  public static final typekey.BatchProcessType TC_WORKFLOW = new typekey.BatchProcessType("Workflow");
  
  /**
   * WorkItemSetPurge
   * Purge WorkItemSet data
   */
  public static final typekey.BatchProcessType TC_WORKITEMSETPURGE = new typekey.BatchProcessType("WorkItemSetPurge");
  
  /**
   * WorkQueueInstrumentationPurge
   * Purge instrumentation data for work queues
   */
  public static final typekey.BatchProcessType TC_WORKQUEUEINSTRUMENTATIONPURGE = new typekey.BatchProcessType("WorkQueueInstrumentationPurge");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.BatchProcessType> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.BatchProcessType>("BatchProcessType");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private BatchProcessType(java.lang.String code)  {
    _typeKeyImplManager  =  com.guidewire.commons.typelist.TypeKeyImplManager.newInstance(this, code);
  }
  
  public int compareTo(gw.entity.TypeKey arg0) {
    return _typeKeyImplManager.getTypeKeyImpl().compareTo(arg0);
  }
  
  /**
   * 
   * @deprecated Use this object instead.
   */
  @java.lang.Deprecated
  public typekey.BatchProcessType get() {
    return this;
  }
  
  public static typekey.BatchProcessType get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.BatchProcessType> getAllTypeKeys() {
    return TYPE.get().getTypeKeys(true);
  }
  
  /**
   * Returns the list of categories that this key belongs to
   * @return the categories that this key belongs to
   */
  public gw.entity.TypeKey[] getCategories() {
    return _typeKeyImplManager.getTypeKeyImpl().getCategories();
  }
  
  public java.lang.String getCode() {
    return _typeKeyImplManager.getCode();
  }
  
  /**
   * Returns the description for this typekey for the current locale.
   * @return the description for this typekey
   */
  public java.lang.String getDescription() {
    return _typeKeyImplManager.getTypeKeyImpl().getDescription();
  }
  
  /**
   * Returns the description of this typekey for the given locale.
   * @param locale the locale to use to get the description
   * @return a description for this typekey for the given locale
   */
  public java.lang.String getDescription(gw.i18n.ILocale locale) {
    return _typeKeyImplManager.getTypeKeyImpl().getDescription(locale);
  }
  
  public java.lang.String getDisplayName() {
    return _typeKeyImplManager.getTypeKeyImpl().getDisplayName();
  }
  
  /**
   * Returns the name of this typekey for the given locale.
   * @param locale 
   */
  public java.lang.String getDisplayName(gw.i18n.ILocale locale) {
    return _typeKeyImplManager.getTypeKeyImpl().getDisplayName(locale);
  }
  
  /**
   * Gets the entity type associated with this typekey, if any. Returns null if this is not a subtype typekey.
   */
  public gw.entity.IEntityType getEntityType() {
    return _typeKeyImplManager.getTypeKeyImpl().getEntityType();
  }
  
  /**
   * Returns the owning type for this key.
   * @return 
   */
  public gw.entity.ITypeList getIntrinsicType() {
    return _typeKeyImplManager.getTypeKeyImpl().getIntrinsicType();
  }
  
  /**
   * A string containing the typelist name.
   */
  public java.lang.String getListName() {
    return _typeKeyImplManager.getTypeKeyImpl().getListName();
  }
  
  /**
   * Returns the value of the "name" attribute for this typekey.
   * @return the name of this typekey
   * @deprecated Use {@link #getDisplayName()} or {@link #getUnlocalizedName()} instead, as appropriate.
   */
  @java.lang.Deprecated
  public java.lang.String getName() {
    return _typeKeyImplManager.getTypeKeyImpl().getName();
  }
  
  public int getOrdinal() {
    return _typeKeyImplManager.getTypeKeyImpl().getOrdinal();
  }
  
  /**
   * Returns the priority for this type key
   * @return the priority for this type key
   */
  public int getPriority() {
    return _typeKeyImplManager.getTypeKeyImpl().getPriority();
  }
  
  /**
   * Returns the sort order for this type key in the specified language.
   * @param locale 
   * @return the sort order for this type key
   */
  public int getSortOrder(gw.i18n.ILocale locale) {
    return _typeKeyImplManager.getTypeKeyImpl().getSortOrder(locale);
  }
  
  public static typekey.BatchProcessType getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.BatchProcessType[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.BatchProcessType[]{});
  }
  
  public static java.util.List<typekey.BatchProcessType> getTypeKeys(boolean includeRetired) {
    return TYPE.get().getTypeKeys(includeRetired);
  }
  
  /**
   * Returns the (non-localized) description of this typekey. Generally should not be used by application code. To get a
   * displayable string, use {@link #getDescription()} instead.
   * @return the non-localized description of this typekey
   */
  public java.lang.String getUnlocalizedDescription() {
    return _typeKeyImplManager.getTypeKeyImpl().getUnlocalizedDescription();
  }
  
  /**
   * Returns the (non-localized) name of this typekey. Generally should not be used by application code. To get a
   * displayable string, use {@link #getDisplayName()} instead. To get a unique string identifier for this typekey,
   * use {@link #getCode()} instead.
   * @return the non-localized name of this typekey
   */
  public java.lang.String getUnlocalizedName() {
    return _typeKeyImplManager.getTypeKeyImpl().getUnlocalizedName();
  }
  
  public typekey.BatchProcessType getValue() {
    return this;
  }
  
  /**
   * Checks to see if this typekey has a category corresponding to the given
   * typekey.  For a match to be found, this typekey has to have a category
   * with the same typelist and code as the given typekey.
   * @param categoryToCheck 
   * @return 
   */
  public boolean hasCategory(gw.entity.TypeKey categoryToCheck) {
    return _typeKeyImplManager.getTypeKeyImpl().hasCategory(categoryToCheck);
  }
  
  /**
   * A boolean that indicates a type code is for internal use by Guidewire software. Internal type codes cannot be
   * removed or modified.
   */
  public boolean isInternal() {
    return _typeKeyImplManager.getTypeKeyImpl().isInternal();
  }
  
  /**
   * Returns true if this type key is retired.  Retired type keys will not show up in the UI.
   * @return true if this type key is retired false if not.
   */
  public boolean isRetired() {
    return _typeKeyImplManager.getTypeKeyImpl().isRetired();
  }
  
  private java.lang.Object readObject(java.io.ObjectInputStream in) throws java.io.InvalidObjectException {
    throw new java.io.InvalidObjectException("Proxy required");
  }
  
  public java.lang.String toString() {
    return getDisplayName();
  }
  
  private java.lang.Object writeReplace() {
    return new com.guidewire.commons.typelist.TypeKeySerializationProxy(this);
  }
  
  static {
    com.guidewire._generated.typekey.BatchProcessTypeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.BatchProcessType>() {
      public void clearCache(typekey.BatchProcessType typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.BatchProcessType typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.BatchProcessType newInstance(java.lang.String code) {
        return new typekey.BatchProcessType(code);
      }
      
      
    });
  }
}