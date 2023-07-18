package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BALoanLeaseGapCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BALoanLeaseGapCov extends entity.BusinessVehicleCov {
  protected BALoanLeaseGapCov()  {
    super((java.lang.Void)null);
  }
  
  public BALoanLeaseGapCov(entity.PolicyPeriod branch)  {
    super(branch, "BALoanLeaseGapCov");
  }
  
  public BALoanLeaseGapCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BALoanLeaseGapCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BALoanLeaseGapCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BALoanLeaseGapCov>() {
      public productmodel.BALoanLeaseGapCov newEmptyInstance() {
        return new productmodel.BALoanLeaseGapCov();
      }
      
      
    });
  }
}