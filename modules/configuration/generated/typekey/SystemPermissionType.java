package typekey;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "SystemPermissionType.tti;SystemPermissionType.tix;SystemPermissionType.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class SystemPermissionType implements gw.entity.TypeKey {
  /**
   * Create address book contacts
   * Permission to create a new contact in the address book
   */
  public static final typekey.SystemPermissionType TC_ABCREATE = new typekey.SystemPermissionType("abcreate");
  
  /**
   * Create address book preferred vendors
   * Permission to add a preferred vendor to the address book
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ABCREATEPREF = new typekey.SystemPermissionType("abcreatepref");
  
  /**
   * Delete address book contacts
   * Permission to delete an existing contact in the address book
   */
  public static final typekey.SystemPermissionType TC_ABDELETE = new typekey.SystemPermissionType("abdelete");
  
  /**
   * Delete address book preferred vendors
   * Permission to delete an existing preferred vendor address book entry
   */
  public static final typekey.SystemPermissionType TC_ABDELETEPREF = new typekey.SystemPermissionType("abdeletepref");
  
  /**
   * Edit address book contacts
   * Permission to edit an existing contact in the address book
   */
  public static final typekey.SystemPermissionType TC_ABEDIT = new typekey.SystemPermissionType("abedit");
  
  /**
   * Edit address book preferred vendors
   * Permission to modify an existing preferred vendor address book entry
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ABEDITPREF = new typekey.SystemPermissionType("abeditpref");
  
  /**
   * View address book contacts
   * Permission to view the details of contact entries in the address book
   */
  public static final typekey.SystemPermissionType TC_ABVIEW = new typekey.SystemPermissionType("abview");
  
  /**
   * View address book contact search pages
   * Permission to search contact entries in the address book
   */
  public static final typekey.SystemPermissionType TC_ABVIEWSEARCH = new typekey.SystemPermissionType("abviewsearch");
  
  /**
   * View account file billing
   * Permission to view account file billing page
   */
  public static final typekey.SystemPermissionType TC_ACCOUNTBILLING = new typekey.SystemPermissionType("accountbilling");
  
  /**
   * View account file claims
   * Permission to view account file claims page
   */
  public static final typekey.SystemPermissionType TC_ACCOUNTCLAIMS = new typekey.SystemPermissionType("accountclaims");
  
  /**
   * View account file contacts
   * Permission to view account file contacts page
   */
  public static final typekey.SystemPermissionType TC_ACCOUNTCONTACTS = new typekey.SystemPermissionType("accountcontacts");
  
  /**
   * Create account
   * Permission to create an account
   */
  public static final typekey.SystemPermissionType TC_ACCOUNTCREATE = new typekey.SystemPermissionType("accountcreate");
  
  /**
   * View account file documents
   * Permission to view account file documents page
   */
  public static final typekey.SystemPermissionType TC_ACCOUNTDOCS = new typekey.SystemPermissionType("accountdocs");
  
  /**
   * View account file history
   * Permission to view account file history page
   */
  public static final typekey.SystemPermissionType TC_ACCOUNTHISTORY = new typekey.SystemPermissionType("accounthistory");
  
  /**
   * Move policies
   * Permission to move policies between accounts
   */
  public static final typekey.SystemPermissionType TC_ACCOUNTMOVEPOLICIES = new typekey.SystemPermissionType("accountmovepolicies");
  
  /**
   * View account file notes
   * Permission to view account file notes page
   */
  public static final typekey.SystemPermissionType TC_ACCOUNTNOTES = new typekey.SystemPermissionType("accountnotes");
  
  /**
   * View account file premiums losses
   * Permission to view account file premiums losses page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ACCOUNTPREMLOSS = new typekey.SystemPermissionType("accountpremloss");
  
  /**
   * View account file related accounts
   * Permission to view account file related accounts page
   */
  public static final typekey.SystemPermissionType TC_ACCOUNTRELATIONS = new typekey.SystemPermissionType("accountrelations");
  
  /**
   * Reopen account
   * Permission to reopen a withdrawn account
   */
  public static final typekey.SystemPermissionType TC_ACCOUNTREOPEN = new typekey.SystemPermissionType("accountreopen");
  
  /**
   * Rewrite policies to account
   * Permission to rewrite policies between accounts
   */
  public static final typekey.SystemPermissionType TC_ACCOUNTREWRITEPOLICIES = new typekey.SystemPermissionType("accountrewritepolicies");
  
  /**
   * View account file roles
   * Permission to view account file roles page
   */
  public static final typekey.SystemPermissionType TC_ACCOUNTROLES = new typekey.SystemPermissionType("accountroles");
  
  /**
   * View account file summary
   * Permission to view account file summary page
   */
  public static final typekey.SystemPermissionType TC_ACCOUNTSUMMARY = new typekey.SystemPermissionType("accountsummary");
  
  /**
   * Withdraw account
   * Permission to withdraw an unused account
   */
  public static final typekey.SystemPermissionType TC_ACCOUNTWITHDRAW = new typekey.SystemPermissionType("accountwithdraw");
  
  /**
   * View account file work orders
   * Permission to view account file work orders page
   */
  public static final typekey.SystemPermissionType TC_ACCOUNTWORKORDERS = new typekey.SystemPermissionType("accountworkorders");
  
  /**
   * Approve any approval activity
   * Permission to approve any approval activity even if the activity is assigned to someone else; the approver is still subject to authority limit restrictions
   */
  public static final typekey.SystemPermissionType TC_ACTAPPROVEANY = new typekey.SystemPermissionType("actapproveany");
  
  /**
   * Create activities
   * Permission to create new activities
   */
  public static final typekey.SystemPermissionType TC_ACTCREATE = new typekey.SystemPermissionType("actcreate");
  
  /**
   * Edit unowned activities
   * Permission to modify (edit/skip/close) activities owned by other users
   */
  public static final typekey.SystemPermissionType TC_ACTEDITUNOWNED = new typekey.SystemPermissionType("acteditunowned");
  
  /**
   * Make activities mandatory
   * Permission to set whether an activity is mandatory
   */
  public static final typekey.SystemPermissionType TC_ACTMAKEMAND = new typekey.SystemPermissionType("actmakemand");
  
  /**
   * Own activity
   * Permission to own an activity.  Note that the user must be able to see the account or job, to own a specific activity.
   */
  public static final typekey.SystemPermissionType TC_ACTOWN = new typekey.SystemPermissionType("actown");
  
  /**
   * Create activity pattern
   * Permission to create new activity patterns
   */
  public static final typekey.SystemPermissionType TC_ACTPATCREATE = new typekey.SystemPermissionType("actpatcreate");
  
  /**
   * Delete activity pattern
   * Permission to delete activity patterns
   */
  public static final typekey.SystemPermissionType TC_ACTPATDELETE = new typekey.SystemPermissionType("actpatdelete");
  
  /**
   * Edit activity pattern
   * Permission to edit activity patterns
   */
  public static final typekey.SystemPermissionType TC_ACTPATEDIT = new typekey.SystemPermissionType("actpatedit");
  
  /**
   * View activity pattern
   * Permission to view the list of activity patterns or activity pattern details
   */
  public static final typekey.SystemPermissionType TC_ACTPATVIEW = new typekey.SystemPermissionType("actpatview");
  
  /**
   * Approve policy activity
   * Permission to approve policy activity
   */
  public static final typekey.SystemPermissionType TC_ACTPOLICYAPPROVE = new typekey.SystemPermissionType("actpolicyapprove");
  
  /**
   * Approve any policy activity
   * Permission to approve any policy activity
   */
  public static final typekey.SystemPermissionType TC_ACTPOLICYAPPROVEANY = new typekey.SystemPermissionType("actpolicyapproveany");
  
  /**
   * Assign activity from queue
   * Permission to assign an activity from a queue
   */
  public static final typekey.SystemPermissionType TC_ACTQUEUEASSIGN = new typekey.SystemPermissionType("actqueueassign");
  
  /**
   * Get next activity from queue
   * Permission to get the next activity off of a queue
   */
  public static final typekey.SystemPermissionType TC_ACTQUEUENEXT = new typekey.SystemPermissionType("actqueuenext");
  
  /**
   * Pick activity from queue
   * Permission to pick an activity from a queue
   */
  public static final typekey.SystemPermissionType TC_ACTQUEUEPICK = new typekey.SystemPermissionType("actqueuepick");
  
  /**
   * Reassign owned activities
   * Permission to reassign your own activities
   */
  public static final typekey.SystemPermissionType TC_ACTRAOWN = new typekey.SystemPermissionType("actraown");
  
  /**
   * Reassign unowned activities
   * Permission to reassign activities owned by other users
   */
  public static final typekey.SystemPermissionType TC_ACTRAUNOWN = new typekey.SystemPermissionType("actraunown");
  
  /**
   * Review assignments
   * Permission to review and approve manually-approved assignables
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ACTREVIEWASSIGN = new typekey.SystemPermissionType("actreviewassign");
  
  /**
   * View activities
   * Permission to view activities
   */
  public static final typekey.SystemPermissionType TC_ACTVIEW = new typekey.SystemPermissionType("actview");
  
  /**
   * View all activity queues
   * Permission to view all activity queues, even those in other security zones
   */
  public static final typekey.SystemPermissionType TC_ACTVIEWALLQUEUES = new typekey.SystemPermissionType("actviewallqueues");
  
  /**
   * Execute Data Change
   * Permission to execute the data change.
   */
  public static final typekey.SystemPermissionType TC_ADMINDATACHANGEEXEC = new typekey.SystemPermissionType("admindatachangeexec");
  
  /**
   * View Data Change
   * Permission to view the data change page.
   */
  public static final typekey.SystemPermissionType TC_ADMINDATACHANGEVIEW = new typekey.SystemPermissionType("admindatachangeview");
  
  /**
   * Administer jobs in an error state
   * Administer Jobs in an Error State
   */
  public static final typekey.SystemPermissionType TC_ADMINERRORSTATEJOBS = new typekey.SystemPermissionType("adminerrorstatejobs");
  
  /**
   * Advance audit
   * Permission to advance audits
   */
  public static final typekey.SystemPermissionType TC_ADVANCEAUDIT = new typekey.SystemPermissionType("advanceaudit");
  
  /**
   * Advance cancellation
   * Permission to advance a cancellation
   */
  public static final typekey.SystemPermissionType TC_ADVANCECANCELLATION = new typekey.SystemPermissionType("advancecancellation");
  
  /**
   * Advance issuance
   * Permission to advance an issuance
   */
  public static final typekey.SystemPermissionType TC_ADVANCEISSUANCE = new typekey.SystemPermissionType("advanceissuance");
  
  /**
   * Advance policy change
   * Permission to advance a policy change
   */
  public static final typekey.SystemPermissionType TC_ADVANCEPOLCHANGE = new typekey.SystemPermissionType("advancepolchange");
  
  /**
   * Advance reinstatement
   * Permission to advance a reinstatement
   */
  public static final typekey.SystemPermissionType TC_ADVANCEREINSTATE = new typekey.SystemPermissionType("advancereinstate");
  
  /**
   * Advance renewal
   * Permission to advance a renewal
   */
  public static final typekey.SystemPermissionType TC_ADVANCERENEWAL = new typekey.SystemPermissionType("advancerenewal");
  
  /**
   * Advance rewrite
   * Permission to advance rewrite
   */
  public static final typekey.SystemPermissionType TC_ADVANCEREWRITE = new typekey.SystemPermissionType("advancerewrite");
  
  /**
   * Advance rewrite new account
   * Permission to advance rewrite new account
   */
  public static final typekey.SystemPermissionType TC_ADVANCEREWRNEWACCT = new typekey.SystemPermissionType("advancerewrnewacct");
  
  /**
   * Advance submission
   * Permission to advance a submission
   */
  public static final typekey.SystemPermissionType TC_ADVANCESUBMISSION = new typekey.SystemPermissionType("advancesubmission");
  
  /**
   * Affinity Group Administration
   * Permission to administer Affinity Groups
   */
  public static final typekey.SystemPermissionType TC_AFFINITYGROUPADMIN = new typekey.SystemPermissionType("affinitygroupadmin");
  
  /**
   * View authority limit profiles
   * Permission to view authority limit profiles
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ALPVIEW = new typekey.SystemPermissionType("alpview");
  
  /**
   * Create contact with any tag
   * Permission to create a new contact regardless of which tag(s) it has
   */
  public static final typekey.SystemPermissionType TC_ANYTAGCREATE = new typekey.SystemPermissionType("anytagcreate");
  
  /**
   * Delete contact with any tag
   * Permission to delete a contact regardless of which tag(s) it has
   */
  public static final typekey.SystemPermissionType TC_ANYTAGDELETE = new typekey.SystemPermissionType("anytagdelete");
  
  /**
   * Edit contact with any tag
   * Permission to edit the details of a contact regardless of which tag(s) it has
   */
  public static final typekey.SystemPermissionType TC_ANYTAGEDIT = new typekey.SystemPermissionType("anytagedit");
  
  /**
   * View contact with any tag
   * Permission to view the details of a contact regardless of which tag(s) it has
   */
  public static final typekey.SystemPermissionType TC_ANYTAGVIEW = new typekey.SystemPermissionType("anytagview");
  
  /**
   * Archive objects
   * Permission to archive objects in the database
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_ARCHIVE = new typekey.SystemPermissionType("archive");
  
  /**
   * Disable archiving for a policy
   * Permission to disable archiving
   */
  public static final typekey.SystemPermissionType TC_ARCHIVEDISABLE = new typekey.SystemPermissionType("archivedisable");
  
  /**
   * Enable archiving for a policy
   * Permission to enable archiving
   */
  public static final typekey.SystemPermissionType TC_ARCHIVEENABLE = new typekey.SystemPermissionType("archiveenable");
  
  /**
   * Manage attributes
   * Permission to create, edit, or delete user attributes
   */
  public static final typekey.SystemPermissionType TC_ATTRMANAGE = new typekey.SystemPermissionType("attrmanage");
  
  /**
   * View attributes
   * Permission to view the list of user attributes or attribute details
   */
  public static final typekey.SystemPermissionType TC_ATTRVIEW = new typekey.SystemPermissionType("attrview");
  
  /**
   * Edit authority profile assignment to users
   * Permission to edit authority profile assignment to users
   */
  public static final typekey.SystemPermissionType TC_AUTHPROFILEASSIGNEDIT = new typekey.SystemPermissionType("authprofileassignedit");
  
  /**
   * View authority profile assignment to users
   * Permission to view authority profile assignment to users
   */
  public static final typekey.SystemPermissionType TC_AUTHPROFILEASSIGNVIEW = new typekey.SystemPermissionType("authprofileassignview");
  
  /**
   * Create authority profile
   * Permission to create or clone an authority profile
   */
  public static final typekey.SystemPermissionType TC_AUTHPROFILECREATE = new typekey.SystemPermissionType("authprofilecreate");
  
  /**
   * Delete authority profile
   * Permission to delete an authority profile
   */
  public static final typekey.SystemPermissionType TC_AUTHPROFILEDELETE = new typekey.SystemPermissionType("authprofiledelete");
  
  /**
   * Edit authority profile
   * Permission to edit an authority profile
   */
  public static final typekey.SystemPermissionType TC_AUTHPROFILEEDIT = new typekey.SystemPermissionType("authprofileedit");
  
  /**
   * View authority profile
   * Permission to view an authority profile
   */
  public static final typekey.SystemPermissionType TC_AUTHPROFILEVIEW = new typekey.SystemPermissionType("authprofileview");
  
  /**
   * Bind cancellation
   * Permission to bind a cancellation
   */
  public static final typekey.SystemPermissionType TC_BINDCANCELLATION = new typekey.SystemPermissionType("bindcancellation");
  
  /**
   * Bind issuance
   * Permission to bind issuance
   */
  public static final typekey.SystemPermissionType TC_BINDISSUANCE = new typekey.SystemPermissionType("bindissuance");
  
  /**
   * Bind policy change
   * Permission to bind policy changes
   */
  public static final typekey.SystemPermissionType TC_BINDPOLCHANGE = new typekey.SystemPermissionType("bindpolchange");
  
  /**
   * Bind reinstatement
   * Permission to bind reinstatement
   */
  public static final typekey.SystemPermissionType TC_BINDREINSTATE = new typekey.SystemPermissionType("bindreinstate");
  
  /**
   * Bind renewal
   * Permission to bind renewals
   */
  public static final typekey.SystemPermissionType TC_BINDRENEWAL = new typekey.SystemPermissionType("bindrenewal");
  
  /**
   * Bind rewrite
   * Permission to bind a rewrite
   */
  public static final typekey.SystemPermissionType TC_BINDREWRITE = new typekey.SystemPermissionType("bindrewrite");
  
  /**
   * Bind rewrite new account
   * Permission to bind a rewrite new account
   */
  public static final typekey.SystemPermissionType TC_BINDREWRNEWACCT = new typekey.SystemPermissionType("bindrewrnewacct");
  
  /**
   * Bind submission
   * Permission to bind a submission
   */
  public static final typekey.SystemPermissionType TC_BINDSUBMISSION = new typekey.SystemPermissionType("bindsubmission");
  
  /**
   * Rate policies in bulk for rating impact analysis
   * Permission to rate policies in bulk for rating impact analysis
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_BULKPOLICYRATINGTEST = new typekey.SystemPermissionType("bulkpolicyratingtest");
  
  /**
   * Manage business week
   * Permission to create, edit, or delete business week
   */
  public static final typekey.SystemPermissionType TC_BUSWKMANAGE = new typekey.SystemPermissionType("buswkmanage");
  
  /**
   * View business week
   * Permission to view the list of business week
   */
  public static final typekey.SystemPermissionType TC_BUSWKVIEW = new typekey.SystemPermissionType("buswkview");
  
  /**
   * Cancellation can choose carrier as source
   * Permission to be able to set the carrier as the source
   */
  public static final typekey.SystemPermissionType TC_CANCELCARRIERSOURCE = new typekey.SystemPermissionType("cancelcarriersource");
  
  /**
   * Cancellation override effective date
   * Permission to set effective date of cancellation to less than calculated date
   */
  public static final typekey.SystemPermissionType TC_CANCELOVEREFFDATE = new typekey.SystemPermissionType("cancelovereffdate");
  
  /**
   * Cancellation override refund method
   * Permission to override the default refund cancellation method
   */
  public static final typekey.SystemPermissionType TC_CANCELOVERREFUND = new typekey.SystemPermissionType("canceloverrefund");
  
  /**
   * Cancellation reschedule
   * Permission to reschedule a cancellation
   */
  public static final typekey.SystemPermissionType TC_CANCELRESCHEDULE = new typekey.SystemPermissionType("cancelreschedule");
  
  /**
   * Cancellation rescind
   * Permission to rescind a cancellation and make other modifications during the waiting period
   */
  public static final typekey.SystemPermissionType TC_CANCELRESCIND = new typekey.SystemPermissionType("cancelrescind");
  
  /**
   * View cancellation wizard documents
   * Permission to view the cancellation wizard documents page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_CANCWIZDOCS = new typekey.SystemPermissionType("cancwizdocs");
  
  /**
   * View cancellation wizard history
   * Permission to view the cancellation history page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_CANCWIZHIST = new typekey.SystemPermissionType("cancwizhist");
  
  /**
   * View cancellation wizard notes
   * Permission to view the cancellation wizard notes page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_CANCWIZNOTES = new typekey.SystemPermissionType("cancwiznotes");
  
  /**
   * View cancellation wizard prior history
   * Permission to view the cancellation wizard prior history page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_CANCWIZPRIORHIST = new typekey.SystemPermissionType("cancwizpriorhist");
  
  /**
   * View cancellation wizard rating inputs
   * Permission to view the cancellation wizard rating inputs page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_CANCWIZRATEINPUTS = new typekey.SystemPermissionType("cancwizrateinputs");
  
  /**
   * View cancellation wizard risk analysis
   * Permission to view the cancellation wizard risk analysis page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_CANCWIZRISK = new typekey.SystemPermissionType("cancwizrisk");
  
  /**
   * View cancellation wizard risk history
   * Permission to view the cancellation wizard risk history page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_CANCWIZRISKHIST = new typekey.SystemPermissionType("cancwizriskhist");
  
  /**
   * View cancellation wizard job roles
   * Permission to view the cancellation wizard job roles page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_CANCWIZROLES = new typekey.SystemPermissionType("cancwizroles");
  
  /**
   * View cancellation wizard workplan
   * Permission to view the cancellation wizard workplan page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_CANCWIZWORKPLAN = new typekey.SystemPermissionType("cancwizworkplan");
  
  /**
   * Change Contact Subtype
   * Permission to change contact subtype
   */
  public static final typekey.SystemPermissionType TC_CHANGECONTACTSUBTYPE = new typekey.SystemPermissionType("changecontactsubtype");
  
  /**
   * Complete audit
   * Permission to complete audits
   */
  public static final typekey.SystemPermissionType TC_COMPLETEAUDIT = new typekey.SystemPermissionType("completeaudit");
  
  /**
   * View contact file claims
   * Permission to view contact file claims page
   */
  public static final typekey.SystemPermissionType TC_CONTACTCLAIMS = new typekey.SystemPermissionType("contactclaims");
  
  /**
   * Copy policy data
   * Permission to copy entities from one Policy to another
   */
  public static final typekey.SystemPermissionType TC_COPYPOLICYDATA = new typekey.SystemPermissionType("copypolicydata");
  
  /**
   * Create audit
   * Permission to create an ad-hoc audit
   */
  public static final typekey.SystemPermissionType TC_CREATEAUDIT = new typekey.SystemPermissionType("createaudit");
  
  /**
   * Create cancellation
   * Permission to cancel a policy
   */
  public static final typekey.SystemPermissionType TC_CREATECANCELLATION = new typekey.SystemPermissionType("createcancellation");
  
  /**
   * Create internal notes
   * Permission to create an internal note
   */
  public static final typekey.SystemPermissionType TC_CREATEINTNOTE = new typekey.SystemPermissionType("createintnote");
  
  /**
   * Create issuance
   * Permission to create a new issuance
   */
  public static final typekey.SystemPermissionType TC_CREATEISSUANCE = new typekey.SystemPermissionType("createissuance");
  
  /**
   * Create manual uw issue
   * Permission to create manual uw issues
   */
  public static final typekey.SystemPermissionType TC_CREATEMANUALUWISSUE = new typekey.SystemPermissionType("createmanualuwissue");
  
  /**
   * Create policy change
   * Permission to create a midterm change
   */
  public static final typekey.SystemPermissionType TC_CREATEPOLCHANGE = new typekey.SystemPermissionType("createpolchange");
  
  /**
   * Create referral reason
   * Create referral reason
   */
  public static final typekey.SystemPermissionType TC_CREATEREFERRALREASON = new typekey.SystemPermissionType("createreferralreason");
  
  /**
   * Create reinstatement
   * Permission to reinstate a policy
   */
  public static final typekey.SystemPermissionType TC_CREATEREINSTATE = new typekey.SystemPermissionType("createreinstate");
  
  /**
   * Create renewal
   * Permission to renew a policy
   */
  public static final typekey.SystemPermissionType TC_CREATERENEWAL = new typekey.SystemPermissionType("createrenewal");
  
  /**
   * Create rewrite
   * Permission to create rewrite
   */
  public static final typekey.SystemPermissionType TC_CREATEREWRITE = new typekey.SystemPermissionType("createrewrite");
  
  /**
   * Create rewrite new account
   * Permission to create rewrite new account
   */
  public static final typekey.SystemPermissionType TC_CREATEREWRNEWACCT = new typekey.SystemPermissionType("createrewrnewacct");
  
  /**
   * Create sensitive notes
   * Permission to create a sensitive note
   */
  public static final typekey.SystemPermissionType TC_CREATESENSNOTE = new typekey.SystemPermissionType("createsensnote");
  
  /**
   * Create submission
   * Permission to create a new submission
   */
  public static final typekey.SystemPermissionType TC_CREATESUBMISSION = new typekey.SystemPermissionType("createsubmission");
  
  /**
   * Create local contacts
   * Permission to create a new local contact
   */
  public static final typekey.SystemPermissionType TC_CTCCREATE = new typekey.SystemPermissionType("ctccreate");
  
  /**
   * Edit local contacts
   * Permission to edit an existing local contact
   */
  public static final typekey.SystemPermissionType TC_CTCEDIT = new typekey.SystemPermissionType("ctcedit");
  
  /**
   * View local contacts
   * Permission to view and search local contact entries
   */
  public static final typekey.SystemPermissionType TC_CTCVIEW = new typekey.SystemPermissionType("ctcview");
  
  /**
   * Always access debug tools
   * Permission to access debug tools, even when they are disabled by a configuration parameter
   */
  public static final typekey.SystemPermissionType TC_DEBUGTOOLS = new typekey.SystemPermissionType("debugtools");
  
  /**
   * Decline policy change
   * Permission to decline a policy change
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_DECLINEPOLCHANGE = new typekey.SystemPermissionType("declinepolchange");
  
  /**
   * Decline submission
   * Permission to decline a submission
   */
  public static final typekey.SystemPermissionType TC_DECLINESUBMISSION = new typekey.SystemPermissionType("declinesubmission");
  
  /**
   * Delete Runtime Properties
   * Permission to delete Runtime Properties
   */
  public static final typekey.SystemPermissionType TC_DELETEPROPERTIES = new typekey.SystemPermissionType("deleteproperties");
  
  /**
   * Delete internal docs
   * Permission to delete an internal doc
   */
  public static final typekey.SystemPermissionType TC_DELINTDOC = new typekey.SystemPermissionType("delintdoc");
  
  /**
   * Delete internal notes
   * Permission to delete an internal note
   */
  public static final typekey.SystemPermissionType TC_DELINTNOTE = new typekey.SystemPermissionType("delintnote");
  
  /**
   * Delete sensitive docs
   * Permission to delete a sensitive doc
   */
  public static final typekey.SystemPermissionType TC_DELSENSDOC = new typekey.SystemPermissionType("delsensdoc");
  
  /**
   * Delete sensitive notes
   * Permission to delete a sensitive note
   */
  public static final typekey.SystemPermissionType TC_DELSENSNOTE = new typekey.SystemPermissionType("delsensnote");
  
  /**
   * Create documents
   * Permission to add documents
   */
  public static final typekey.SystemPermissionType TC_DOCCREATE = new typekey.SystemPermissionType("doccreate");
  
  /**
   * Delete documents
   * Permission to remove documents
   */
  public static final typekey.SystemPermissionType TC_DOCDELETE = new typekey.SystemPermissionType("docdelete");
  
  /**
   * Edit documents
   * Permission to edit documents
   */
  public static final typekey.SystemPermissionType TC_DOCEDIT = new typekey.SystemPermissionType("docedit");
  
  /**
   * Modify all documents
   * Permission to edit or delete all documents, regardless of the permissions set on the individual documents
   */
  public static final typekey.SystemPermissionType TC_DOCMODIFYALL = new typekey.SystemPermissionType("docmodifyall");
  
  /**
   * View documents
   * Permission to view documents
   */
  public static final typekey.SystemPermissionType TC_DOCVIEW = new typekey.SystemPermissionType("docview");
  
  /**
   * View all documents
   * Permission to view all documents, regardless of the permissions set on the individual documents
   */
  public static final typekey.SystemPermissionType TC_DOCVIEWALL = new typekey.SystemPermissionType("docviewall");
  
  /**
   * Edit account file contacts
   * Permission to edit account file contacts page
   */
  public static final typekey.SystemPermissionType TC_EDITACCOUNTCONTACTS = new typekey.SystemPermissionType("editaccountcontacts");
  
  /**
   * Edit account roles
   * Permission to edit account roles
   */
  public static final typekey.SystemPermissionType TC_EDITACCOUNTROLES = new typekey.SystemPermissionType("editaccountroles");
  
  /**
   * Edit account
   * Permission to edit account info (accessed via Account File Summary page)
   */
  public static final typekey.SystemPermissionType TC_EDITACCOUNTSUMMARY = new typekey.SystemPermissionType("editaccountsummary");
  
  /**
   * Edit audit
   * Permission to edit audits
   */
  public static final typekey.SystemPermissionType TC_EDITAUDIT = new typekey.SystemPermissionType("editaudit");
  
  /**
   * Edit covered auto symbols
   * Edit covered auto symbols
   */
  public static final typekey.SystemPermissionType TC_EDITAUTOSYMBOL = new typekey.SystemPermissionType("editautosymbol");
  
  /**
   * Edit cancellation
   * Permission to edit a cancellation
   */
  public static final typekey.SystemPermissionType TC_EDITCANCELLATION = new typekey.SystemPermissionType("editcancellation");
  
  /**
   * Edit Inbound Files
   * Permission to edit inbound files and records
   */
  public static final typekey.SystemPermissionType TC_EDITINBOUNDFILES = new typekey.SystemPermissionType("editinboundfiles");
  
  /**
   * Edit internal docs
   * Permission to edit an internal doc
   */
  public static final typekey.SystemPermissionType TC_EDITINTDOC = new typekey.SystemPermissionType("editintdoc");
  
  /**
   * Edit internal notes
   * Permission to edit an internal note
   */
  public static final typekey.SystemPermissionType TC_EDITINTNOTE = new typekey.SystemPermissionType("editintnote");
  
  /**
   * Edit issuance
   * Permission to edit a issuance
   */
  public static final typekey.SystemPermissionType TC_EDITISSUANCE = new typekey.SystemPermissionType("editissuance");
  
  /**
   * Edit job roles
   * Permission to edit job roles
   */
  public static final typekey.SystemPermissionType TC_EDITJOBROLES = new typekey.SystemPermissionType("editjobroles");
  
  /**
   * Edit Lock Override
   * Permission to override the edit lock
   */
  public static final typekey.SystemPermissionType TC_EDITLOCKOVERRIDE = new typekey.SystemPermissionType("editlockoverride");
  
  /**
   * Edit non-renew explanation
   * Permission to edit non-renew explanation
   */
  public static final typekey.SystemPermissionType TC_EDITNONRENEWEXP = new typekey.SystemPermissionType("editnonrenewexp");
  
  /**
   * Edit obfuscated user contact
   * Permission to edit obfuscated user contacts
   */
  public static final typekey.SystemPermissionType TC_EDITOBFUSCATEDUSERCONTACT = new typekey.SystemPermissionType("editobfuscatedusercontact");
  
  /**
   * Edit Outbound Files
   * Permission to edit outbound files and records
   */
  public static final typekey.SystemPermissionType TC_EDITOUTBOUNDFILES = new typekey.SystemPermissionType("editoutboundfiles");
  
  /**
   * Edit policy change
   * Permission to edit a policy change
   */
  public static final typekey.SystemPermissionType TC_EDITPOLCHANGE = new typekey.SystemPermissionType("editpolchange");
  
  /**
   * Edit policy roles
   * Permission to edit policy roles
   */
  public static final typekey.SystemPermissionType TC_EDITPOLICYROLES = new typekey.SystemPermissionType("editpolicyroles");
  
  /**
   * Edit pre-renewal
   * Permission to edit pre-renewal
   */
  public static final typekey.SystemPermissionType TC_EDITPRERENEWAL = new typekey.SystemPermissionType("editprerenewal");
  
  /**
   * Edit Runtime Properties
   * Permission to edit Runtime Properties
   */
  public static final typekey.SystemPermissionType TC_EDITPROPERTIES = new typekey.SystemPermissionType("editproperties");
  
  /**
   * Edit Rate as of Date
   * Permission to view and edit the Rate as of Date
   */
  public static final typekey.SystemPermissionType TC_EDITRATEASOFDATE = new typekey.SystemPermissionType("editrateasofdate");
  
  /**
   * Edit rate and premium overrides
   * Permission to edit the premium overrides screens and any field that is used to set a discretionary rate or premium.
   */
  public static final typekey.SystemPermissionType TC_EDITRATINGOVERRIDES = new typekey.SystemPermissionType("editratingoverrides");
  
  /**
   * Edit reinstatement
   * Permission to edit a reinstatement
   */
  public static final typekey.SystemPermissionType TC_EDITREINSTATE = new typekey.SystemPermissionType("editreinstate");
  
  /**
   * Edit active RI programs
   * Permission to edit active reinsurance programs
   */
  public static final typekey.SystemPermissionType TC_EDITREINSURANCEACTIVEPROGRAM = new typekey.SystemPermissionType("editreinsuranceactiveprogram");
  
  /**
   * Edit fac agreements
   * Permission to edit facultative agreements
   */
  public static final typekey.SystemPermissionType TC_EDITREINSURANCEFACAGREEMENT = new typekey.SystemPermissionType("editreinsurancefacagreement");
  
  /**
   * Edit RI policies advanced
   * Permission to edit advanced reinsurance fields for policies
   */
  public static final typekey.SystemPermissionType TC_EDITREINSURANCEFORPOLICYADVANCED = new typekey.SystemPermissionType("editreinsuranceforpolicyadvanced");
  
  /**
   * Edit RI policies basic
   * Permission to edit basic reinsurance fields for policies
   */
  public static final typekey.SystemPermissionType TC_EDITREINSURANCEFORPOLICYBASIC = new typekey.SystemPermissionType("editreinsuranceforpolicybasic");
  
  /**
   * Edit RI programs
   * Permission to edit reinsurance programs
   */
  public static final typekey.SystemPermissionType TC_EDITREINSURANCEPROGRAM = new typekey.SystemPermissionType("editreinsuranceprogram");
  
  /**
   * Edit renewal
   * Permission to edit a renewal
   */
  public static final typekey.SystemPermissionType TC_EDITRENEWAL = new typekey.SystemPermissionType("editrenewal");
  
  /**
   * Edit rewrite
   * Permission to edit rewrite
   */
  public static final typekey.SystemPermissionType TC_EDITREWRITE = new typekey.SystemPermissionType("editrewrite");
  
  /**
   * Edit rewrite new account
   * Permission to edit rewrite new account
   */
  public static final typekey.SystemPermissionType TC_EDITREWRNEWACCT = new typekey.SystemPermissionType("editrewrnewacct");
  
  /**
   * Edit sensitive docs
   * Permission to edit a sensitive doc
   */
  public static final typekey.SystemPermissionType TC_EDITSENSDOC = new typekey.SystemPermissionType("editsensdoc");
  
  /**
   * Edit sensitive notes
   * Permission to edit a sensitive note
   */
  public static final typekey.SystemPermissionType TC_EDITSENSNOTE = new typekey.SystemPermissionType("editsensnote");
  
  /**
   * Edit submission
   * Permission to edit a submission
   */
  public static final typekey.SystemPermissionType TC_EDITSUBMISSION = new typekey.SystemPermissionType("editsubmission");
  
  /**
   * Edit written date
   * Permission to edit the written date of a PolicyPeriod
   */
  public static final typekey.SystemPermissionType TC_EDITWRITTENDATE = new typekey.SystemPermissionType("editwrittendate");
  
  /**
   * View event messages
   * Permission to view the event messages page
   */
  public static final typekey.SystemPermissionType TC_EVENTMESSAGEVIEW = new typekey.SystemPermissionType("eventmessageview");
  
  /**
   * Manage export masks
   * Permission to create, edit, or delete export masks
   */
  public static final typekey.SystemPermissionType TC_EXPORTMASKSMANAGE = new typekey.SystemPermissionType("exportmasksmanage");
  
  /**
   * Export Runtime Properties
   * Permission to export Runtime Properties
   */
  public static final typekey.SystemPermissionType TC_EXPORTPROPERTIES = new typekey.SystemPermissionType("exportproperties");
  
  /**
   * Create form pattern
   * Permission to create form patterns
   */
  public static final typekey.SystemPermissionType TC_FORMPATCREATE = new typekey.SystemPermissionType("formpatcreate");
  
  /**
   * Delete form pattern
   * Permission to delete form patterns
   */
  public static final typekey.SystemPermissionType TC_FORMPATDELETE = new typekey.SystemPermissionType("formpatdelete");
  
  /**
   * Edit form pattern
   * Permission to edit form patterns
   */
  public static final typekey.SystemPermissionType TC_FORMPATEDIT = new typekey.SystemPermissionType("formpatedit");
  
  /**
   * View form pattern
   * Permission to view the list of form patterns or form pattern details
   */
  public static final typekey.SystemPermissionType TC_FORMPATVIEW = new typekey.SystemPermissionType("formpatview");
  
  /**
   * Create groups
   * Permission to create groups
   */
  public static final typekey.SystemPermissionType TC_GROUPCREATE = new typekey.SystemPermissionType("groupcreate");
  
  /**
   * Delete groups
   * Permission to delete groups
   */
  public static final typekey.SystemPermissionType TC_GROUPDELETE = new typekey.SystemPermissionType("groupdelete");
  
  /**
   * Edit groups
   * Permission to edit groups
   */
  public static final typekey.SystemPermissionType TC_GROUPEDIT = new typekey.SystemPermissionType("groupedit");
  
  /**
   * View group tree
   * Permission to see the user/group tree on the Administration tab
   */
  public static final typekey.SystemPermissionType TC_GROUPTREEVIEW = new typekey.SystemPermissionType("grouptreeview");
  
  /**
   * View groups
   * Permission to view details of a group
   */
  public static final typekey.SystemPermissionType TC_GROUPVIEW = new typekey.SystemPermissionType("groupview");
  
  /**
   * Manage holidays
   * Permission to create, edit, and delete holidays
   */
  public static final typekey.SystemPermissionType TC_HOLIDAYMANAGE = new typekey.SystemPermissionType("holidaymanage");
  
  /**
   * View holidays
   * Permission to view a list of holidays or holiday details
   */
  public static final typekey.SystemPermissionType TC_HOLIDAYVIEW = new typekey.SystemPermissionType("holidayview");
  
  /**
   * Import Runtime Properties
   * Permission to import Runtime Properties
   */
  public static final typekey.SystemPermissionType TC_IMPORTPROPERTIES = new typekey.SystemPermissionType("importproperties");
  
  /**
   * Administer integration
   * Permission to administer integration events
   */
  public static final typekey.SystemPermissionType TC_INTEGADMIN = new typekey.SystemPermissionType("integadmin");
  
  /**
   * All internal tools
   * Permission to access all Internal Tools
   */
  public static final typekey.SystemPermissionType TC_INTERNALTOOLS = new typekey.SystemPermissionType("internaltools");
  
  /**
   * Issuing
   * Permission to issue a policy
   */
  public static final typekey.SystemPermissionType TC_ISSUE = new typekey.SystemPermissionType("issue");
  
  /**
   * Issue renewal
   * Permission to issue a renewal
   */
  public static final typekey.SystemPermissionType TC_ISSUERENEWAL = new typekey.SystemPermissionType("issuerenewal");
  
  /**
   * Copy job
   * Permission to copy a job
   */
  public static final typekey.SystemPermissionType TC_JOBCOPY = new typekey.SystemPermissionType("jobcopy");
  
  /**
   * Lookup Table Edit
   * Permission to edit lookup tables
   */
  public static final typekey.SystemPermissionType TC_LOOKUPTABLEEDIT = new typekey.SystemPermissionType("lookuptableedit");
  
  /**
   * Lookup Table View
   * Permission to view lookup tables
   */
  public static final typekey.SystemPermissionType TC_LOOKUPTABLEVIEW = new typekey.SystemPermissionType("lookuptableview");
  
  /**
   * Print listviews
   * Permission to print listviews
   */
  public static final typekey.SystemPermissionType TC_LVPRINT = new typekey.SystemPermissionType("lvprint");
  
  /**
   * Manage load factors
   * Permission to modify the load factors on all users and groups
   */
  public static final typekey.SystemPermissionType TC_MANAGELDFCTRS = new typekey.SystemPermissionType("manageldfctrs");
  
  /**
   * Merge Accounts
   * Permission to move all information from one account to another and delete the irrelevant one
   */
  public static final typekey.SystemPermissionType TC_MERGEACCOUNTS = new typekey.SystemPermissionType("mergeaccounts");
  
  /**
   * Multiple company quote
   * Ability to see multiple company quotes and select which company to proceed with.
   */
  public static final typekey.SystemPermissionType TC_MULTICOMPQUOTE = new typekey.SystemPermissionType("multicompquote");
  
  /**
   * Non-Renewal
   * Permission to non-renew
   */
  public static final typekey.SystemPermissionType TC_NONRENEW = new typekey.SystemPermissionType("nonrenew");
  
  /**
   * Create notes
   * Permission to add notes
   */
  public static final typekey.SystemPermissionType TC_NOTECREATE = new typekey.SystemPermissionType("notecreate");
  
  /**
   * Delete notes
   * Permission to remove notes
   */
  public static final typekey.SystemPermissionType TC_NOTEDELETE = new typekey.SystemPermissionType("notedelete");
  
  /**
   * Edit note
   * Permission to edit the notes
   */
  public static final typekey.SystemPermissionType TC_NOTEEDIT = new typekey.SystemPermissionType("noteedit");
  
  /**
   * Edit note body
   * Permission to edit the body of notes
   */
  public static final typekey.SystemPermissionType TC_NOTEEDITBODY = new typekey.SystemPermissionType("noteeditbody");
  
  /**
   * View notes
   * Permission to view notes
   */
  public static final typekey.SystemPermissionType TC_NOTEVIEW = new typekey.SystemPermissionType("noteview");
  
  /**
   * Flag submission as not-taken
   * Permission to flag a submission as not-taken
   */
  public static final typekey.SystemPermissionType TC_NOTTAKENSUBMISSION = new typekey.SystemPermissionType("nottakensubmission");
  
  /**
   * Not-Taken renewal
   * Permission to not-take a renewal
   */
  public static final typekey.SystemPermissionType TC_NOTTAKERENEWAL = new typekey.SystemPermissionType("nottakerenewal");
  
  /**
   * Create organization
   * Permission to create an organization.
   */
  public static final typekey.SystemPermissionType TC_ORGCREATE = new typekey.SystemPermissionType("orgcreate");
  
  /**
   * Delete organization
   * Permission to delete an organization.
   */
  public static final typekey.SystemPermissionType TC_ORGDELETE = new typekey.SystemPermissionType("orgdelete");
  
  /**
   * Delete externally manageable organization
   * Permission to delete an externally manageable organization.
   */
  public static final typekey.SystemPermissionType TC_ORGDELETEEX = new typekey.SystemPermissionType("orgdeleteex");
  
  /**
   * Edit organization agency info
   * Permission to edit an organization's agency info.
   */
  public static final typekey.SystemPermissionType TC_ORGEDITAGENCY = new typekey.SystemPermissionType("orgeditagency");
  
  /**
   * Edit organization basic info
   * Permission to edit an organization's basic info.
   */
  public static final typekey.SystemPermissionType TC_ORGEDITBASIC = new typekey.SystemPermissionType("orgeditbasic");
  
  /**
   * Edit externally manageable organization basic info
   * Permission to edit an externally manageable organization's basic info.
   */
  public static final typekey.SystemPermissionType TC_ORGEDITBASICEX = new typekey.SystemPermissionType("orgeditbasicex");
  
  /**
   * Search for organization
   * Permission to search for organizations.
   */
  public static final typekey.SystemPermissionType TC_ORGSEARCH = new typekey.SystemPermissionType("orgsearch");
  
  /**
   * View organization agency info
   * Permission to view an organization's agency information.
   */
  public static final typekey.SystemPermissionType TC_ORGVIEWAGENCY = new typekey.SystemPermissionType("orgviewagency");
  
  /**
   * View organization basic info
   * Permission to view an organization's basic info.
   */
  public static final typekey.SystemPermissionType TC_ORGVIEWBASIC = new typekey.SystemPermissionType("orgviewbasic");
  
  /**
   * View organization external manageability
   * Permission to view an organization's external manageability.
   */
  public static final typekey.SystemPermissionType TC_ORGVIEWEXTMGT = new typekey.SystemPermissionType("orgviewextmgt");
  
  /**
   * View and Edit Outbound Files
   * Permission to view and edit outbound files and records
   */
  public static final typekey.SystemPermissionType TC_OUTBOUNDFILES = new typekey.SystemPermissionType("outboundfiles");
  
  /**
   * Override Billing
   * Permission to override billing behaviors
   */
  public static final typekey.SystemPermissionType TC_OVERRIDEBILLING = new typekey.SystemPermissionType("overridebilling");
  
  /**
   * View policy change wizard documents
   * Permission to view the policy change wizard documents page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_PCHGWIZDOCS = new typekey.SystemPermissionType("pchgwizdocs");
  
  /**
   * View policy change wizard history
   * Permission to view the policy change history page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_PCHGWIZHIST = new typekey.SystemPermissionType("pchgwizhist");
  
  /**
   * View policy change wizard notes
   * Permission to view the policy change wizard notes page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_PCHGWIZNOTES = new typekey.SystemPermissionType("pchgwiznotes");
  
  /**
   * View policy change wizard prior history
   * Permission to view the policy change wizard prior history page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_PCHGWIZPRIORHIST = new typekey.SystemPermissionType("pchgwizpriorhist");
  
  /**
   * View policy change wizard rating inputs
   * Permission to view the policy change wizard rating inputs page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_PCHGWIZRATEINPUTS = new typekey.SystemPermissionType("pchgwizrateinputs");
  
  /**
   * View policy change wizard risk analysis
   * Permission to view the policy change wizard risk analysis page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_PCHGWIZRISK = new typekey.SystemPermissionType("pchgwizrisk");
  
  /**
   * View policy change wizard risk history
   * Permission to view the policy change wizard risk history page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_PCHGWIZRISKHIST = new typekey.SystemPermissionType("pchgwizriskhist");
  
  /**
   * View policy change wizard job roles
   * Permission to view the policy change wizard job roles page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_PCHGWIZROLES = new typekey.SystemPermissionType("pchgwizroles");
  
  /**
   * View policy change wizard workplan
   * Permission to view the policy change wizard workplan page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_PCHGWIZWORKPLAN = new typekey.SystemPermissionType("pchgwizworkplan");
  
  /**
   * View policy file billing
   * Permission to view the policy file billing page
   */
  public static final typekey.SystemPermissionType TC_PFILEBILLING = new typekey.SystemPermissionType("pfilebilling");
  
  /**
   * View policy file claims
   * Permission to view the policy file claims page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_PFILECLAIMS = new typekey.SystemPermissionType("pfileclaims");
  
  /**
   * View policy file contacts
   * Permission to view the policy file contacts page
   */
  public static final typekey.SystemPermissionType TC_PFILECONTACTS = new typekey.SystemPermissionType("pfilecontacts");
  
  /**
   * View policy file details
   * Permission to view the policy file details page
   */
  public static final typekey.SystemPermissionType TC_PFILEDETAILS = new typekey.SystemPermissionType("pfiledetails");
  
  /**
   * View policy file documents
   * Permission to view the policy file documents page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_PFILEDOCS = new typekey.SystemPermissionType("pfiledocs");
  
  /**
   * View policy file notes
   * Permission to view the policy file notes page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_PFILENOTES = new typekey.SystemPermissionType("pfilenotes");
  
  /**
   * View policy file payments
   * Permission to view the policy file payments page
   */
  public static final typekey.SystemPermissionType TC_PFILEPAYMENTS = new typekey.SystemPermissionType("pfilepayments");
  
  /**
   * View policy file pricing
   * Permission to view the policy file pricing page
   */
  public static final typekey.SystemPermissionType TC_PFILEPRICING = new typekey.SystemPermissionType("pfilepricing");
  
  /**
   * View policy file prior history
   * Permission to view the policy file prior history page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_PFILEPRIORHIST = new typekey.SystemPermissionType("pfilepriorhist");
  
  /**
   * View policy file rating inputs
   * Permission to view the policy file rating inputs page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_PFILERATEINPUTS = new typekey.SystemPermissionType("pfilerateinputs");
  
  /**
   * View policy file risk evaluation
   * Permission to view the policy file risk evaluation page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_PFILERISKEVAL = new typekey.SystemPermissionType("pfileriskeval");
  
  /**
   * View policy file participants
   * Permission to view the policy file partipants page page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_PFILEROLES = new typekey.SystemPermissionType("pfileroles");
  
  /**
   * View policy file summary
   * Permission to view the policy file summary page
   */
  public static final typekey.SystemPermissionType TC_PFILESUMMARY = new typekey.SystemPermissionType("pfilesummary");
  
  /**
   * View policy file work orders
   * Permission to view the policy file work orders page
   */
  public static final typekey.SystemPermissionType TC_PFILEWORKORDERS = new typekey.SystemPermissionType("pfileworkorders");
  
  /**
   * Create policy hold
   * Permission to create policy holds
   */
  public static final typekey.SystemPermissionType TC_POLHOLDCREATE = new typekey.SystemPermissionType("polholdcreate");
  
  /**
   * Edit policy hold
   * Permission to edit policy holds
   */
  public static final typekey.SystemPermissionType TC_POLHOLDEDIT = new typekey.SystemPermissionType("polholdedit");
  
  /**
   * Delete policy hold
   * Permission to delete policy holds
   */
  public static final typekey.SystemPermissionType TC_POLHOLDELETE = new typekey.SystemPermissionType("polholdelete");
  
  /**
   * View policy hold
   * Permission to view the list of policy holds or policy hold details
   */
  public static final typekey.SystemPermissionType TC_POLHOLDVIEW = new typekey.SystemPermissionType("polholdview");
  
  /**
   * Manually price policy
   * Permission to manually price a policy
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_PRICE = new typekey.SystemPermissionType("price");
  
  /**
   * Create producer code
   * Permission to create a producer code.
   */
  public static final typekey.SystemPermissionType TC_PRODCODECREATE = new typekey.SystemPermissionType("prodcodecreate");
  
  /**
   * Delete producer code
   * Permission to delete a producer code.
   */
  public static final typekey.SystemPermissionType TC_PRODCODEDELETE = new typekey.SystemPermissionType("prodcodedelete");
  
  /**
   * Edit producer code address
   * Permission to edit a producer code's address.
   */
  public static final typekey.SystemPermissionType TC_PRODCODEEDITADDR = new typekey.SystemPermissionType("prodcodeeditaddr");
  
  /**
   * Edit producer code basic info
   * Permission to edit a producer code's basic info.
   */
  public static final typekey.SystemPermissionType TC_PRODCODEEDITBASIC = new typekey.SystemPermissionType("prodcodeeditbasic");
  
  /**
   * Edit producer code preferred underwriter
   * Permission to edit a producer code's preferred underwriter.
   */
  public static final typekey.SystemPermissionType TC_PRODCODEEDITPREFUW = new typekey.SystemPermissionType("prodcodeeditprefuw");
  
  /**
   * View producer code basic info
   * Permission to view a producer code's basic info.
   */
  public static final typekey.SystemPermissionType TC_PRODCODEVIEWBASIC = new typekey.SystemPermissionType("prodcodeviewbasic");
  
  /**
   * View producer code preferred underwriter
   * Permission to view a producer code's preferred underwriter.
   */
  public static final typekey.SystemPermissionType TC_PRODCODEVIEWPREFUW = new typekey.SystemPermissionType("prodcodeviewprefuw");
  
  /**
   * Purge objects
   * Permission to purge objects from the database
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_PURGE = new typekey.SystemPermissionType("purge");
  
  /**
   * Disable purging for a policy period
   * Permission to disable purging
   */
  public static final typekey.SystemPermissionType TC_PURGEDISABLE = new typekey.SystemPermissionType("purgedisable");
  
  /**
   * Enable purging for a policy period
   * Permission to enable purging
   */
  public static final typekey.SystemPermissionType TC_PURGEENABLE = new typekey.SystemPermissionType("purgeenable");
  
  /**
   * Quote
   * Permission to request a quote for a policy
   */
  public static final typekey.SystemPermissionType TC_QUOTE = new typekey.SystemPermissionType("quote");
  
  /**
   * Quote Hide Override
   * Permission to override the quote hide
   */
  public static final typekey.SystemPermissionType TC_QUOTEHIDEOVERRIDE = new typekey.SystemPermissionType("quotehideoverride");
  
  /**
   * Approve rate books and tables
   * Permission to approve and activate rate books.
   */
  public static final typekey.SystemPermissionType TC_RATEBOOKAPPROVE = new typekey.SystemPermissionType("ratebookapprove");
  
  /**
   * Edit rate books and tables
   * Permission to add and edit rate books and tables.
   */
  public static final typekey.SystemPermissionType TC_RATEBOOKEDIT = new typekey.SystemPermissionType("ratebookedit");
  
  /**
   * View rate books and tables
   * Permission to view rate books and tables.
   */
  public static final typekey.SystemPermissionType TC_RATEBOOKVIEW = new typekey.SystemPermissionType("ratebookview");
  
  /**
   * Rate policies for rate impact testing
   * Permission to rate policies for rate impact testing
   */
  public static final typekey.SystemPermissionType TC_RATEIMPACTTESTING = new typekey.SystemPermissionType("rateimpacttesting");
  
  /**
   * View rating worksheet
   * Permission to view rating worksheets.
   */
  public static final typekey.SystemPermissionType TC_RATINGWORKSHEETVIEW = new typekey.SystemPermissionType("ratingworksheetview");
  
  /**
   * Manage regions
   * Permission to create, edit, and delete regions
   */
  public static final typekey.SystemPermissionType TC_REGIONMANAGE = new typekey.SystemPermissionType("regionmanage");
  
  /**
   * View regions
   * Permission to view the list of regions and region details
   */
  public static final typekey.SystemPermissionType TC_REGIONVIEW = new typekey.SystemPermissionType("regionview");
  
  /**
   * View reinstatement wizard documents
   * Permission to view the reinstatement wizard documents page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REINWIZDOCS = new typekey.SystemPermissionType("reinwizdocs");
  
  /**
   * View reinstatement wizard history
   * Permission to view the reinstatement history page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REINWIZHIST = new typekey.SystemPermissionType("reinwizhist");
  
  /**
   * View reinstatement wizard notes
   * Permission to view the reinstatement wizard notes page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REINWIZNOTES = new typekey.SystemPermissionType("reinwiznotes");
  
  /**
   * View reinstatement wizard prior history
   * Permission to view the reinstatement wizard prior history page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REINWIZPRIORHIST = new typekey.SystemPermissionType("reinwizpriorhist");
  
  /**
   * View reinstatement wizard rating inputs
   * Permission to view the reinstatement wizard rating inputs page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REINWIZRATEINPUTS = new typekey.SystemPermissionType("reinwizrateinputs");
  
  /**
   * View reinstatement wizard risk analysis
   * Permission to view the reinstatement wizard risk analysis page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REINWIZRISK = new typekey.SystemPermissionType("reinwizrisk");
  
  /**
   * View reinstatement wizard risk history
   * Permission to view the reinstatement wizard risk history page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REINWIZRISKHIST = new typekey.SystemPermissionType("reinwizriskhist");
  
  /**
   * View reinstatement wizard job roles
   * Permission to view the reinstatement wizard job roles page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REINWIZROLES = new typekey.SystemPermissionType("reinwizroles");
  
  /**
   * View reinstatement wizard workplan
   * Permission to view the reinstatement wizard workplan page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REINWIZWORKPLAN = new typekey.SystemPermissionType("reinwizworkplan");
  
  /**
   * View Report tab
   * Permission to view the Report tab, if the add-on reporting module is installed
   */
  public static final typekey.SystemPermissionType TC_REPORTING_VIEW = new typekey.SystemPermissionType("reporting_view");
  
  /**
   * Request Contact Destruction
   * Permission to call the PersonalDataDestructionAPI to destroy contacts
   */
  public static final typekey.SystemPermissionType TC_REQUESTCONTACTDESTRUCTION = new typekey.SystemPermissionType("requestcontactdestruction");
  
  /**
   * Reschedule audit
   * Permission to change the dates of an audit
   */
  public static final typekey.SystemPermissionType TC_RESCHEDULEAUDIT = new typekey.SystemPermissionType("rescheduleaudit");
  
  /**
   * Reset Quoting Lock
   * Permission to reset the commit lock of a Quoting Policy
   */
  public static final typekey.SystemPermissionType TC_RESETQUOTINGLOCK = new typekey.SystemPermissionType("resetquotinglock");
  
  /**
   * Retrieve from archive
   * Permission to retrieve a policy period from the archive.
   */
  public static final typekey.SystemPermissionType TC_RESTOREFROMARCHIVE = new typekey.SystemPermissionType("restorefromarchive");
  
  /**
   * Resync message
   * Permission to resync message
   */
  public static final typekey.SystemPermissionType TC_RESYNCMESSAGE = new typekey.SystemPermissionType("resyncmessage");
  
  /**
   * Retry message
   * Permission to try to resend the failed message
   */
  public static final typekey.SystemPermissionType TC_RETRYMESSAGE = new typekey.SystemPermissionType("retrymessage");
  
  /**
   * Reverse audit
   * Permission to manually reverse an audit
   */
  public static final typekey.SystemPermissionType TC_REVERSEAUDIT = new typekey.SystemPermissionType("reverseaudit");
  
  /**
   * Review cancellation
   * Permission to review a cancellation
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REVIEWCANCELLATION = new typekey.SystemPermissionType("reviewcancellation");
  
  /**
   * Review policy change
   * Permission to review a policy change
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REVIEWPOLCHANGE = new typekey.SystemPermissionType("reviewpolchange");
  
  /**
   * Review reinstatement
   * Permission to review a reinstatement
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REVIEWREINSTATE = new typekey.SystemPermissionType("reviewreinstate");
  
  /**
   * Review renewal
   * Permission to review a renewal
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REVIEWRENEWAL = new typekey.SystemPermissionType("reviewrenewal");
  
  /**
   * Approve rewrite
   * Permission to approve rewrite
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REVIEWREWRITE = new typekey.SystemPermissionType("reviewrewrite");
  
  /**
   * Approve rewrite new account
   * Permission to approve rewrite new account
   */
  public static final typekey.SystemPermissionType TC_REVIEWREWRNEWACCT = new typekey.SystemPermissionType("reviewrewrnewacct");
  
  /**
   * Review submission
   * Permission to edit a submission that is in review state
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REVIEWSUBMISSION = new typekey.SystemPermissionType("reviewsubmission");
  
  /**
   * Revise audit
   * Revise audit
   */
  public static final typekey.SystemPermissionType TC_REVISEAUDIT = new typekey.SystemPermissionType("reviseaudit");
  
  /**
   * View rewrite wizard documents
   * Permission to view the rewrite wizard documents page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REWRWIZDOCS = new typekey.SystemPermissionType("rewrwizdocs");
  
  /**
   * View rewrite wizard history
   * Permission to view the rewrite wizard history page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REWRWIZHIST = new typekey.SystemPermissionType("rewrwizhist");
  
  /**
   * View rewrite wizard notes
   * Permission to view the rewrite wizard notes page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REWRWIZNOTES = new typekey.SystemPermissionType("rewrwiznotes");
  
  /**
   * View rewrite wizard prior history
   * Permission to view the rewrite wizard prior history page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REWRWIZPRIORHIST = new typekey.SystemPermissionType("rewrwizpriorhist");
  
  /**
   * View rewrite wizard rating inputs
   * Permission to view the rewrite wizard rating inputs page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REWRWIZRATEINPUTS = new typekey.SystemPermissionType("rewrwizrateinputs");
  
  /**
   * View rewrite wizard risk analysis
   * Permission to view the rewrite wizard risk analysis page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REWRWIZRISK = new typekey.SystemPermissionType("rewrwizrisk");
  
  /**
   * View rewrite wizard risk history
   * Permission to view the rewrite wizard risk history page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REWRWIZRISKHIST = new typekey.SystemPermissionType("rewrwizriskhist");
  
  /**
   * View rewrite wizard job roles
   * Permission to view the rewrite wizard job roles page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REWRWIZROLES = new typekey.SystemPermissionType("rewrwizroles");
  
  /**
   * View rewrite wizard workplan
   * Permission to view the rewrite wizard workplan page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_REWRWIZWORKPLAN = new typekey.SystemPermissionType("rewrwizworkplan");
  
  /**
   * View renewal wizard documents
   * Permission to view the renewal wizard documents page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_RNWLWIZDOCS = new typekey.SystemPermissionType("rnwlwizdocs");
  
  /**
   * View renewal wizard history
   * Permission to view the renewal history page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_RNWLWIZHIST = new typekey.SystemPermissionType("rnwlwizhist");
  
  /**
   * View renewal wizard notes
   * Permission to view the renewal wizard notes page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_RNWLWIZNOTES = new typekey.SystemPermissionType("rnwlwiznotes");
  
  /**
   * View renewal wizard prior history
   * Permission to view the renewal wizard prior history page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_RNWLWIZPRIORHIST = new typekey.SystemPermissionType("rnwlwizpriorhist");
  
  /**
   * View renewal wizard rating inputs
   * Permission to view the renewal wizard rating inputs page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_RNWLWIZRATEINPUTS = new typekey.SystemPermissionType("rnwlwizrateinputs");
  
  /**
   * View renewal wizard risk analysis
   * Permission to view the renewal wizard risk analysis page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_RNWLWIZRISK = new typekey.SystemPermissionType("rnwlwizrisk");
  
  /**
   * View renewal wizard risk history
   * Permission to view the renewal wizard risk history page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_RNWLWIZRISKHIST = new typekey.SystemPermissionType("rnwlwizriskhist");
  
  /**
   * View renewal wizard job roles
   * Permission to view the renewal wizard job roles page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_RNWLWIZROLES = new typekey.SystemPermissionType("rnwlwizroles");
  
  /**
   * View renewal wizard workplan
   * Permission to view the renewal wizard workplan page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_RNWLWIZWORKPLAN = new typekey.SystemPermissionType("rnwlwizworkplan");
  
  /**
   * Edit role type
   * Permission to edit the role type (internal, external)
   */
  public static final typekey.SystemPermissionType TC_ROLEEDITTYPE = new typekey.SystemPermissionType("roleedittype");
  
  /**
   * Manage roles
   * Permission to create, edit, or delete roles
   */
  public static final typekey.SystemPermissionType TC_ROLEMANAGE = new typekey.SystemPermissionType("rolemanage");
  
  /**
   * View roles
   * Permission to view the list of roles and role details
   */
  public static final typekey.SystemPermissionType TC_ROLEVIEW = new typekey.SystemPermissionType("roleview");
  
  /**
   * Administer rules
   * Permission to run Guidewire Studio or import rules
   */
  public static final typekey.SystemPermissionType TC_RULEADMIN = new typekey.SystemPermissionType("ruleadmin");
  
  /**
   * Approve Rule
   * Permission to approve a rule
   */
  public static final typekey.SystemPermissionType TC_RULEAPPROVE = new typekey.SystemPermissionType("ruleapprove");
  
  /**
   * Deploy Rule
   * Permission to deploy a rule
   */
  public static final typekey.SystemPermissionType TC_RULEDEPLOY = new typekey.SystemPermissionType("ruledeploy");
  
  /**
   * Edit Rule
   * Permission to edit a rule
   */
  public static final typekey.SystemPermissionType TC_RULEEDIT = new typekey.SystemPermissionType("ruleedit");
  
  /**
   * Import Rule
   * Permission to import a rule
   */
  public static final typekey.SystemPermissionType TC_RULEIMPORT = new typekey.SystemPermissionType("ruleimport");
  
  /**
   * View Rule
   * Permission to view a rule
   */
  public static final typekey.SystemPermissionType TC_RULEVIEW = new typekey.SystemPermissionType("ruleview");
  
  /**
   * Manage script parameters
   * Permission to create, edit, or delete script parameters
   */
  public static final typekey.SystemPermissionType TC_SCRPRMMANAGE = new typekey.SystemPermissionType("scrprmmanage");
  
  /**
   * View script parameters
   * Permission to view the list of script parameters or details of an individual script parameter
   */
  public static final typekey.SystemPermissionType TC_SCRPRMVIEW = new typekey.SystemPermissionType("scrprmview");
  
  /**
   * Search accounts
   * Permission to search accounts
   */
  public static final typekey.SystemPermissionType TC_SEARCHACCOUNTS = new typekey.SystemPermissionType("searchaccounts");
  
  /**
   * Search activities
   * Permission to search activities
   */
  public static final typekey.SystemPermissionType TC_SEARCHACTIVITIES = new typekey.SystemPermissionType("searchactivities");
  
  /**
   * Search related contacts
   * Permission to search contacts related to the user
   */
  public static final typekey.SystemPermissionType TC_SEARCHCONTACTS = new typekey.SystemPermissionType("searchcontacts");
  
  /**
   * Search related policies
   * Permission to search active/in-force policies related to the user
   */
  public static final typekey.SystemPermissionType TC_SEARCHPOLS = new typekey.SystemPermissionType("searchpols");
  
  /**
   * Search producer codes
   * Permission to search producer codes
   */
  public static final typekey.SystemPermissionType TC_SEARCHPRODCODES = new typekey.SystemPermissionType("searchprodcodes");
  
  /**
   * Manage security zones
   * Permission to create, edit, and delete security zones
   */
  public static final typekey.SystemPermissionType TC_SECZONEMANAGE = new typekey.SystemPermissionType("seczonemanage");
  
  /**
   * Select non-renew as a pre-renewal direction
   * Permission to select non-renew as a pre-renewal direction
   */
  public static final typekey.SystemPermissionType TC_SELECTNONRENEW = new typekey.SystemPermissionType("selectnonrenew");
  
  /**
   * Send Email
   * Permission to create and send email
   */
  public static final typekey.SystemPermissionType TC_SENDEMAIL = new typekey.SystemPermissionType("sendemail");
  
  /**
   * Skip message
   * Permission to skip the failed message
   */
  public static final typekey.SystemPermissionType TC_SKIPMESSAGE = new typekey.SystemPermissionType("skipmessage");
  
  /**
   * SOAP administration
   * Permission to use the SOAP APIs
   */
  public static final typekey.SystemPermissionType TC_SOAPADMIN = new typekey.SystemPermissionType("soapadmin");
  
  /**
   * Split or Spin Policies
   * Permission to divide (split or spin) policies into other submissions
   */
  public static final typekey.SystemPermissionType TC_SPLITPOLICY = new typekey.SystemPermissionType("splitpolicy");
  
  /**
   * Start audit job
   * Permission to start an audit
   */
  public static final typekey.SystemPermissionType TC_STARTAUDIT = new typekey.SystemPermissionType("startaudit");
  
  /**
   * View submission wizard documents
   * Permission to view the submission wizard documents page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_SUBWIZDOCS = new typekey.SystemPermissionType("subwizdocs");
  
  /**
   * View submission wizard history
   * Permission to view the submission wizard history page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_SUBWIZHIST = new typekey.SystemPermissionType("subwizhist");
  
  /**
   * View submission wizard notes
   * Permission to view the submission wizard notes page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_SUBWIZNOTES = new typekey.SystemPermissionType("subwiznotes");
  
  /**
   * View submission wizard prior history
   * Permission to view the submission wizard prior history page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_SUBWIZPRIORHIST = new typekey.SystemPermissionType("subwizpriorhist");
  
  /**
   * View submission wizard rating inputs
   * Permission to view the submission wizard rating inputs page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_SUBWIZRATEINPUTS = new typekey.SystemPermissionType("subwizrateinputs");
  
  /**
   * View submission wizard risk analysis
   * Permission to view the submission wizard risk analysis page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_SUBWIZRISK = new typekey.SystemPermissionType("subwizrisk");
  
  /**
   * View submission wizard risk history
   * Permission to view the submission wizard risk history page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_SUBWIZRISKHIST = new typekey.SystemPermissionType("subwizriskhist");
  
  /**
   * View submission wizard job roles
   * Permission to view the submission wizard job roles page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_SUBWIZROLES = new typekey.SystemPermissionType("subwizroles");
  
  /**
   * View submission wizard workplan
   * Permission to view the submission wizard workplan page
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_SUBWIZWORKPLAN = new typekey.SystemPermissionType("subwizworkplan");
  
  /**
   * Edit BatchProcess tools page
   * Permission to edit the BatchProcess Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSBATCHPROCESSEDIT = new typekey.SystemPermissionType("toolsBatchProcessedit");
  
  /**
   * View BatchProcess tools page
   * Permission to access the BatchProcess Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSBATCHPROCESSVIEW = new typekey.SystemPermissionType("toolsBatchProcessview");
  
  /**
   * View Cache Info page
   * Permission to view the CacheInfo Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSCACHEINFOVIEW = new typekey.SystemPermissionType("toolsCacheinfoview");
  
  /**
   * Edit Cluster tools page
   * Permission to edit the Cluster Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSCLUSTEREDIT = new typekey.SystemPermissionType("toolsClusteredit");
  
  /**
   * View Cluster tools page
   * Permission to access the Cluster Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSCLUSTERVIEW = new typekey.SystemPermissionType("toolsClusterview");
  
  /**
   * View Info tools page
   * Permission to access the Info Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSINFOVIEW = new typekey.SystemPermissionType("toolsInfoview");
  
  /**
   * Edit ManagementBeans tools page
   * Permission to edit the ManagementBeans presented on Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSJMXBEANSEDIT = new typekey.SystemPermissionType("toolsJMXBeansEdit");
  
  /**
   * View ManagementBeans tools page
   * Permission to access the ManagementBeans Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSJMXBEANSVIEW = new typekey.SystemPermissionType("toolsJMXBeansview");
  
  /**
   * Edit JProfiler tools page
   * Permission to edit the JProfiler Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSJPROFILEREDIT = new typekey.SystemPermissionType("toolsJProfileredit");
  
  /**
   * Edit Log tools page
   * Permission to edit the Log Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSLOGEDIT = new typekey.SystemPermissionType("toolsLogedit");
  
  /**
   * View Log tools page
   * Permission to access the Log Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSLOGVIEW = new typekey.SystemPermissionType("toolsLogview");
  
  /**
   * Edit StartablePlugin tools page
   * Permission to edit the StartablePlugin Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSPLUGINEDIT = new typekey.SystemPermissionType("toolsPluginedit");
  
  /**
   * View StartablePlugin tools page
   * Permission to access the StartablePlugin Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSPLUGINVIEW = new typekey.SystemPermissionType("toolsPluginview");
  
  /**
   * View ProductModelInfo tools page
   * Permission to access the ProductModelInfo page in ServerTools
   */
  public static final typekey.SystemPermissionType TC_TOOLSPRODUCTMODELINFOVIEW = new typekey.SystemPermissionType("toolsProductModelInfoview");
  
  /**
   * Edit Profiler tools page
   * Permission to edit the Profiler Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSPROFILEREDIT = new typekey.SystemPermissionType("toolsProfileredit");
  
  /**
   * View Profiler tools page
   * Permission to access the Profiler Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSPROFILERVIEW = new typekey.SystemPermissionType("toolsProfilerview");
  
  /**
   * Edit WorkQueue tools page
   * Permission to edit the WorkQueue Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSWORKQUEUEEDIT = new typekey.SystemPermissionType("toolsWorkQueueedit");
  
  /**
   * View WorkQueue tools page
   * Permission to access the WorkQueue Internal Tools page
   */
  public static final typekey.SystemPermissionType TC_TOOLSWORKQUEUEVIEW = new typekey.SystemPermissionType("toolsWorkQueueview");
  
  /**
   * Producer Code Update
   * Permission to update producer code
   */
  public static final typekey.SystemPermissionType TC_UPDATEPRODCODES = new typekey.SystemPermissionType("updateprodcodes");
  
  /**
   * Create users
   * Permission to create a new user
   */
  public static final typekey.SystemPermissionType TC_USERCREATE = new typekey.SystemPermissionType("usercreate");
  
  /**
   * Delete users
   * Permission to delete a user (Note: if a user has had any activity it's recommended to make them non-active rather than delete)
   */
  public static final typekey.SystemPermissionType TC_USERDELETE = new typekey.SystemPermissionType("userdelete");
  
  /**
   * Edit users
   * Permission to edit an existing user, except for roles, authority limits, or attributes
   */
  public static final typekey.SystemPermissionType TC_USEREDIT = new typekey.SystemPermissionType("useredit");
  
  /**
   * Edit user attributes
   * Permission to edit attributes for a user
   */
  public static final typekey.SystemPermissionType TC_USEREDITATTRS = new typekey.SystemPermissionType("usereditattrs");
  
  /**
   * Edit user language
   * Permission to edit language
   */
  public static final typekey.SystemPermissionType TC_USEREDITLANG = new typekey.SystemPermissionType("usereditlang");
  
  /**
   * Edit user producer code security flag
   * Permission to edit whether the user uses producer code security
   */
  public static final typekey.SystemPermissionType TC_USEREDITPCSEC = new typekey.SystemPermissionType("usereditpcsec");
  
  /**
   * Edit user internal
   * Permission to edit the whether the user is internal or external
   */
  public static final typekey.SystemPermissionType TC_USEREDITTYPE = new typekey.SystemPermissionType("useredittype");
  
  /**
   * Grant authority limits
   * Permission to grant or change an authority limit for a user
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_USERGRANTAUTH = new typekey.SystemPermissionType("usergrantauth");
  
  /**
   * Grant roles to users
   * Permission to grant or revoke roles
   */
  public static final typekey.SystemPermissionType TC_USERGRANTROLES = new typekey.SystemPermissionType("usergrantroles");
  
  /**
   * Reassign roles bulk
   * Permission to reassign bulk role assignments on jobs or policies.
   */
  public static final typekey.SystemPermissionType TC_USERROLEASSIGNMENTBULKASSIGN = new typekey.SystemPermissionType("userroleassignmentbulkassign");
  
  /**
   * View user
   * Permission to view details of a user
   */
  public static final typekey.SystemPermissionType TC_USERVIEW = new typekey.SystemPermissionType("userview");
  
  /**
   * View all users
   * Permission to see users in all visible groups
   */
  public static final typekey.SystemPermissionType TC_USERVIEWALL = new typekey.SystemPermissionType("userviewall");
  
  /**
   * Approve all UW Issues
   * Permission to approve UW Issues even without an authority grant
   */
  public static final typekey.SystemPermissionType TC_UWAPPROVEALL = new typekey.SystemPermissionType("uwapproveall");
  
  /**
   * Edit underwriting companies
   * Permission to edit the underwriting companies page
   */
  public static final typekey.SystemPermissionType TC_UWEDIT = new typekey.SystemPermissionType("uwedit");
  
  /**
   * Reject UW Issues
   * Permission to mark UW Issues as Rejected
   */
  public static final typekey.SystemPermissionType TC_UWREJECT = new typekey.SystemPermissionType("uwreject");
  
  /**
   * Reopen UW Issues
   * Permission to mark Rejected or Approved UW Issues as Repoened
   */
  public static final typekey.SystemPermissionType TC_UWREOPEN = new typekey.SystemPermissionType("uwreopen");
  
  /**
   * Approve UW Rules
   * Permission to approve UW Rules
   */
  public static final typekey.SystemPermissionType TC_UWRULEAPPROVE = new typekey.SystemPermissionType("uwruleapprove");
  
  /**
   * Deploy UW Rules
   * Permission to deploy UW Rules
   */
  public static final typekey.SystemPermissionType TC_UWRULEDEPLOY = new typekey.SystemPermissionType("uwruledeploy");
  
  /**
   * Edit UW Rules
   * Permission to edit UW Rules
   */
  public static final typekey.SystemPermissionType TC_UWRULEEDIT = new typekey.SystemPermissionType("uwruleedit");
  
  /**
   * Import UW Rules
   * Permission to import UW Rules
   */
  public static final typekey.SystemPermissionType TC_UWRULEIMPORT = new typekey.SystemPermissionType("uwruleimport");
  
  /**
   * View UW Rules
   * Permission to view UW Rules
   */
  public static final typekey.SystemPermissionType TC_UWRULEVIEW = new typekey.SystemPermissionType("uwruleview");
  
  /**
   * View underwriting companies
   * Permission to view the underwriting companies page
   */
  public static final typekey.SystemPermissionType TC_UWVIEW = new typekey.SystemPermissionType("uwview");
  
  /**
   * View account
   * Permission to view accounts
   */
  public static final typekey.SystemPermissionType TC_VIEWACCOUNT = new typekey.SystemPermissionType("viewaccount");
  
  /**
   * Account Holder Info
   * Permission to navigate to and view Account Holder Info page under contacts
   */
  public static final typekey.SystemPermissionType TC_VIEWACCOUNTHOLDERINFO = new typekey.SystemPermissionType("viewaccountholderinfo");
  
  /**
   * View activity calendar
   * Permission to view activity calendar of other users
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_VIEWACTCAL = new typekey.SystemPermissionType("viewactcal");
  
  /**
   * View audit
   * Permission to view an audit
   */
  public static final typekey.SystemPermissionType TC_VIEWAUDIT = new typekey.SystemPermissionType("viewaudit");
  
  /**
   * View billing system
   * Permission to see the hyperlink to billing system
   */
  public static final typekey.SystemPermissionType TC_VIEWBILLINGSYSTEM = new typekey.SystemPermissionType("viewbillingsystem");
  
  /**
   * View cancellation
   * Permission to view cancellations
   */
  public static final typekey.SystemPermissionType TC_VIEWCANCELLATION = new typekey.SystemPermissionType("viewcancellation");
  
  /**
   * View claim system
   * Permission to see the hyperlink to claim system
   */
  public static final typekey.SystemPermissionType TC_VIEWCLAIMSYSTEM = new typekey.SystemPermissionType("viewclaimsystem");
  
  /**
   * View desktop
   * Permission to view the Desktop
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_VIEWDESKTOP = new typekey.SystemPermissionType("viewdesktop");
  
  /**
   * View History
   * Permission to view the history page
   */
  public static final typekey.SystemPermissionType TC_VIEWHIST = new typekey.SystemPermissionType("viewhist");
  
  /**
   * View Inbound Files
   * Permission to view inbound files and records
   */
  public static final typekey.SystemPermissionType TC_VIEWINBOUNDFILES = new typekey.SystemPermissionType("viewinboundfiles");
  
  /**
   * View internal docs
   * Permission to view an internal doc
   */
  public static final typekey.SystemPermissionType TC_VIEWINTDOC = new typekey.SystemPermissionType("viewintdoc");
  
  /**
   * View internal notes
   * Permission to view an internal note
   */
  public static final typekey.SystemPermissionType TC_VIEWINTNOTE = new typekey.SystemPermissionType("viewintnote");
  
  /**
   * View issuance
   * Permission to view issuance
   */
  public static final typekey.SystemPermissionType TC_VIEWISSUANCE = new typekey.SystemPermissionType("viewissuance");
  
  /**
   * View Modifiers
   * Permission to view modifiers page
   */
  public static final typekey.SystemPermissionType TC_VIEWMODIFIERS = new typekey.SystemPermissionType("viewmodifiers");
  
  /**
   * View my accounts
   * Permission to view My Accounts page
   */
  public static final typekey.SystemPermissionType TC_VIEWMYACCOUNTS = new typekey.SystemPermissionType("viewmyaccounts");
  
  /**
   * View my activities
   * Permission to view My Activities page
   */
  public static final typekey.SystemPermissionType TC_VIEWMYACTIVITIES = new typekey.SystemPermissionType("viewmyactivities");
  
  /**
   * View my policy changes
   * Permission to view My Policy Changes page
   */
  public static final typekey.SystemPermissionType TC_VIEWMYPOLICYCHANGES = new typekey.SystemPermissionType("viewmypolicychanges");
  
  /**
   * View my queues
   * Permission to view My Queues page
   */
  public static final typekey.SystemPermissionType TC_VIEWMYQUEUES = new typekey.SystemPermissionType("viewmyqueues");
  
  /**
   * View my renewals
   * Permission to view My Renewals page
   */
  public static final typekey.SystemPermissionType TC_VIEWMYRENEWALS = new typekey.SystemPermissionType("viewmyrenewals");
  
  /**
   * View my submissions
   * Permission to view My Submissions page
   */
  public static final typekey.SystemPermissionType TC_VIEWMYSUBMISSIONS = new typekey.SystemPermissionType("viewmysubmissions");
  
  /**
   * View Outbound Files
   * Permission to view outbound files and records
   */
  public static final typekey.SystemPermissionType TC_VIEWOUTBOUNDFILES = new typekey.SystemPermissionType("viewoutboundfiles");
  
  /**
   * View Participants
   * Permission to view participant page
   */
  public static final typekey.SystemPermissionType TC_VIEWPARTICIPANTS = new typekey.SystemPermissionType("viewparticipants");
  
  /**
   * View policy change
   * Permission to view policy changes
   */
  public static final typekey.SystemPermissionType TC_VIEWPOLCHANGE = new typekey.SystemPermissionType("viewpolchange");
  
  /**
   * View policy file
   * Permission to view policy files
   */
  public static final typekey.SystemPermissionType TC_VIEWPOLICYFILE = new typekey.SystemPermissionType("viewpolicyfile");
  
  /**
   * View pre-renewal
   * Permission to view pre-renewal
   */
  public static final typekey.SystemPermissionType TC_VIEWPRERENEWAL = new typekey.SystemPermissionType("viewprerenewal");
  
  /**
   * View producer style desktop details
   * Permission to view desktop details appropriate for a producer.
   */
  public static final typekey.SystemPermissionType TC_VIEWPRODUCERSTYLEDESKTOPDETAILS = new typekey.SystemPermissionType("viewproducerstyledesktopdetails");
  
  /**
   * View Runtime Properties screen
   * Permission to view Runtime Properties screen
   */
  public static final typekey.SystemPermissionType TC_VIEWPROPERTIES = new typekey.SystemPermissionType("viewproperties");
  
  /**
   * View rate and premium overrides
   * Permission to view the premium overrides screens and any field that is used to set a discretionary rate or premium.
   */
  public static final typekey.SystemPermissionType TC_VIEWRATINGOVERRIDES = new typekey.SystemPermissionType("viewratingoverrides");
  
  /**
   * View reinstatement
   * Permission to view reinstatement
   */
  public static final typekey.SystemPermissionType TC_VIEWREINSTATE = new typekey.SystemPermissionType("viewreinstate");
  
  /**
   * View RI policies
   * Permission to view reinsurance for policies
   */
  public static final typekey.SystemPermissionType TC_VIEWREINSURANCEFORPOLICY = new typekey.SystemPermissionType("viewreinsuranceforpolicy");
  
  /**
   * View RI programs
   * Permission to view reinsurance programs
   */
  public static final typekey.SystemPermissionType TC_VIEWREINSURANCEPROGRAM = new typekey.SystemPermissionType("viewreinsuranceprogram");
  
  /**
   * View renewal
   * Permission to view renewals
   */
  public static final typekey.SystemPermissionType TC_VIEWRENEWAL = new typekey.SystemPermissionType("viewrenewal");
  
  /**
   * View restricted claim
   * Permission to see the hyperlink to restricted claim in claim system
   */
  public static final typekey.SystemPermissionType TC_VIEWRESTRICTEDCLAIM = new typekey.SystemPermissionType("viewrestrictedclaim");
  
  /**
   * View rewrite
   * Permission to view rewrite
   */
  public static final typekey.SystemPermissionType TC_VIEWREWRITE = new typekey.SystemPermissionType("viewrewrite");
  
  /**
   * View rewrite new account
   * Permission to view rewrite new account
   */
  public static final typekey.SystemPermissionType TC_VIEWREWRNEWACCT = new typekey.SystemPermissionType("viewrewrnewacct");
  
  /**
   * View risk analysis claims
   * Permission to view claims
   */
  public static final typekey.SystemPermissionType TC_VIEWRISKCLAIMS = new typekey.SystemPermissionType("viewriskclaims");
  
  /**
   * View risk analysis UW issues
   * Permission to view UW issues
   */
  public static final typekey.SystemPermissionType TC_VIEWRISKEVALISSUES = new typekey.SystemPermissionType("viewriskevalissues");
  
  /**
   * View risk analysis prior losses
   * Permission to view prior losses
   */
  public static final typekey.SystemPermissionType TC_VIEWRISKPRIORLOSSES = new typekey.SystemPermissionType("viewriskpriorlosses");
  
  /**
   * View risk analysis prior policies
   * Permission to view prior policies
   */
  public static final typekey.SystemPermissionType TC_VIEWRISKPRIORPOLICIES = new typekey.SystemPermissionType("viewriskpriorpolicies");
  
  /**
   * View risk analysis referral reasons
   * Permission to view referral reasons
   */
  public static final typekey.SystemPermissionType TC_VIEWRISKREFREASONS = new typekey.SystemPermissionType("viewriskrefreasons");
  
  /**
   * View search tab
   * Permission to view the Search tab
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_VIEWSEARCH = new typekey.SystemPermissionType("viewsearch");
  
  /**
   * View sensitive docs
   * Permission to view a sensitive doc
   */
  public static final typekey.SystemPermissionType TC_VIEWSENSDOC = new typekey.SystemPermissionType("viewsensdoc");
  
  /**
   * View sensitive notes
   * Permission to view a sensitive note
   */
  public static final typekey.SystemPermissionType TC_VIEWSENSNOTE = new typekey.SystemPermissionType("viewsensnote");
  
  /**
   * View submission
   * Permission to view a submission
   */
  public static final typekey.SystemPermissionType TC_VIEWSUBMISSION = new typekey.SystemPermissionType("viewsubmission");
  
  /**
   * View team
   * Permission to view the Team tab
   */
  public static final typekey.SystemPermissionType TC_VIEWTEAM = new typekey.SystemPermissionType("viewteam");
  
  /**
   * View global workload
   * Permission to view global workload statistics of other users
   */
  @java.lang.Deprecated
  public static final typekey.SystemPermissionType TC_VIEWWORKLOAD = new typekey.SystemPermissionType("viewworkload");
  
  /**
   * View Workplan
   * Permission to view workplan page
   */
  public static final typekey.SystemPermissionType TC_VIEWWORKPLAN = new typekey.SystemPermissionType("viewworkplan");
  
  /**
   * Waive audit
   * Permission to waive an audit
   */
  public static final typekey.SystemPermissionType TC_WAIVEAUDIT = new typekey.SystemPermissionType("waiveaudit");
  
  /**
   * Withdraw
   * Permission to withdraw a policy
   */
  public static final typekey.SystemPermissionType TC_WITHDRAW = new typekey.SystemPermissionType("withdraw");
  
  /**
   * Manage workflow
   * Permission to view the ManageWorkflow page
   */
  public static final typekey.SystemPermissionType TC_WORKFLOWMANAGE = new typekey.SystemPermissionType("workflowmanage");
  
  /**
   * View workflow
   * Permission to view the Workflow page
   */
  public static final typekey.SystemPermissionType TC_WORKFLOWVIEW = new typekey.SystemPermissionType("workflowview");
  
  /**
   * Add Data Change
   * Permission to add a data change gosu program.
   */
  public static final typekey.SystemPermissionType TC_WSDATACHANGEEDIT = new typekey.SystemPermissionType("wsdatachangeedit");
  
  /**
   * Manage admin zones
   * Permission to create, edit, or delete admin zones
   */
  public static final typekey.SystemPermissionType TC_ZONEMANAGE = new typekey.SystemPermissionType("zonemanage");
  
  /**
   * View admin zones
   * Permission to view the list of admin zones
   */
  public static final typekey.SystemPermissionType TC_ZONEVIEW = new typekey.SystemPermissionType("zoneview");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.SystemPermissionType> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.SystemPermissionType>("SystemPermissionType");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private SystemPermissionType(java.lang.String code)  {
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
  public typekey.SystemPermissionType get() {
    return this;
  }
  
  public static typekey.SystemPermissionType get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.SystemPermissionType> getAllTypeKeys() {
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
  
  public static typekey.SystemPermissionType getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.SystemPermissionType[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.SystemPermissionType[]{});
  }
  
  public static java.util.List<typekey.SystemPermissionType> getTypeKeys(boolean includeRetired) {
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
  
  public typekey.SystemPermissionType getValue() {
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
    com.guidewire._generated.typekey.SystemPermissionTypeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.SystemPermissionType>() {
      public void clearCache(typekey.SystemPermissionType typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.SystemPermissionType typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.SystemPermissionType newInstance(java.lang.String code) {
        return new typekey.SystemPermissionType(code);
      }
      
      
    });
  }
}