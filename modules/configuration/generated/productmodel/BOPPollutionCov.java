package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPPollutionCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPPollutionCov extends entity.BusinessOwnersCov {
  protected BOPPollutionCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPPollutionCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPPollutionCov");
  }
  
  public BOPPollutionCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPPollutionCov");
  }
  
  public productmodel.DirectBOPPollutionLimType getBOPPollutionLimTerm() {
    return (productmodel.DirectBOPPollutionLimType)getCovTerm("BOPPollutionLim");
  }
  
  public boolean getHasBOPPollutionLimTerm() {
    return hasCovTerm("BOPPollutionLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPPollutionCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPPollutionCov>() {
      public productmodel.BOPPollutionCov newEmptyInstance() {
        return new productmodel.BOPPollutionCov();
      }
      
      
    });
  }
}