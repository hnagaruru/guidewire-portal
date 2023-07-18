package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPComputerFraudCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPComputerFraudCov extends entity.BusinessOwnersCov {
  protected BOPComputerFraudCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPComputerFraudCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPComputerFraudCov");
  }
  
  public BOPComputerFraudCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPComputerFraudCov");
  }
  
  public productmodel.OptionBOPComputerFraudLimType getBOPComputerFraudLimTerm() {
    return (productmodel.OptionBOPComputerFraudLimType)getCovTerm("BOPComputerFraudLim");
  }
  
  public boolean getHasBOPComputerFraudLimTerm() {
    return hasCovTerm("BOPComputerFraudLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPComputerFraudCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPComputerFraudCov>() {
      public productmodel.BOPComputerFraudCov newEmptyInstance() {
        return new productmodel.BOPComputerFraudCov();
      }
      
      
    });
  }
}