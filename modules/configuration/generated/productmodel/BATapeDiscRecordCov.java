package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BATapeDiscRecordCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BATapeDiscRecordCov extends entity.BusinessVehicleCov {
  protected BATapeDiscRecordCov()  {
    super((java.lang.Void)null);
  }
  
  public BATapeDiscRecordCov(entity.PolicyPeriod branch)  {
    super(branch, "BATapeDiscRecordCov");
  }
  
  public BATapeDiscRecordCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BATapeDiscRecordCov");
  }
  
  public productmodel.OptionBATapeDiscLimitType getBATapeDiscLimitTerm() {
    return (productmodel.OptionBATapeDiscLimitType)getCovTerm("BATapeDiscLimit");
  }
  
  public boolean getHasBATapeDiscLimitTerm() {
    return hasCovTerm("BATapeDiscLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.BATapeDiscRecordCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BATapeDiscRecordCov>() {
      public productmodel.BATapeDiscRecordCov newEmptyInstance() {
        return new productmodel.BATapeDiscRecordCov();
      }
      
      
    });
  }
}