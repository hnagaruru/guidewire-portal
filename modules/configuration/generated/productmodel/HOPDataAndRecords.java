package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPDataAndRecords.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPDataAndRecords extends entity.HOPDwellingCov {
  protected HOPDataAndRecords()  {
    super((java.lang.Void)null);
  }
  
  public HOPDataAndRecords(entity.PolicyPeriod branch)  {
    super(branch, "ztihci8muqm61c3a6vmaeb28a2b");
  }
  
  public HOPDataAndRecords(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ztihci8muqm61c3a6vmaeb28a2b");
  }
  
  public productmodel.OptionHOPDataAndRecordsLimitType getHOPDataAndRecordsLimitTerm() {
    return (productmodel.OptionHOPDataAndRecordsLimitType)getCovTerm("zj5iembc591apahqggk4cgvcft8");
  }
  
  public productmodel.GenericHOPDataAndRecordsPersonalOnlyType getHOPDataAndRecordsPersonalOnlyTerm() {
    return (productmodel.GenericHOPDataAndRecordsPersonalOnlyType)getCovTerm("zonisjg5e30c114s32p2shpo5na");
  }
  
  public boolean getHasHOPDataAndRecordsLimitTerm() {
    return hasCovTerm("zj5iembc591apahqggk4cgvcft8");
  }
  
  public boolean getHasHOPDataAndRecordsPersonalOnlyTerm() {
    return hasCovTerm("zonisjg5e30c114s32p2shpo5na");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPDataAndRecordsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPDataAndRecords>() {
      public productmodel.HOPDataAndRecords newEmptyInstance() {
        return new productmodel.HOPDataAndRecords();
      }
      
      
    });
  }
}