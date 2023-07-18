package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPBackupSewersDrainsPump.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPBackupSewersDrainsPump extends entity.HOPDwellingCov {
  protected HOPBackupSewersDrainsPump()  {
    super((java.lang.Void)null);
  }
  
  public HOPBackupSewersDrainsPump(entity.PolicyPeriod branch)  {
    super(branch, "z50ikk44122467ads0qitrdqqi8");
  }
  
  public HOPBackupSewersDrainsPump(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z50ikk44122467ads0qitrdqqi8");
  }
  
  public productmodel.OptionHOPBackupSewersDrainsPumpDeductibleType getHOPBackupSewersDrainsPumpDeductibleTerm() {
    return (productmodel.OptionHOPBackupSewersDrainsPumpDeductibleType)getCovTerm("zpni4ecv2jd3de9ekhpl7gn19j9");
  }
  
  public productmodel.OptionHOPBackupSewersDrainsPumpLimitType getHOPBackupSewersDrainsPumpLimitTerm() {
    return (productmodel.OptionHOPBackupSewersDrainsPumpLimitType)getCovTerm("zteg0fguld0sccqafgenav4ff79");
  }
  
  public boolean getHasHOPBackupSewersDrainsPumpDeductibleTerm() {
    return hasCovTerm("zpni4ecv2jd3de9ekhpl7gn19j9");
  }
  
  public boolean getHasHOPBackupSewersDrainsPumpLimitTerm() {
    return hasCovTerm("zteg0fguld0sccqafgenav4ff79");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPBackupSewersDrainsPumpInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPBackupSewersDrainsPump>() {
      public productmodel.HOPBackupSewersDrainsPump newEmptyInstance() {
        return new productmodel.HOPBackupSewersDrainsPump();
      }
      
      
    });
  }
}