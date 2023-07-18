package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPHearingAidCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPHearingAidCov extends entity.BusinessOwnersCov {
  protected BOPHearingAidCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPHearingAidCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPHearingAidCov");
  }
  
  public BOPHearingAidCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPHearingAidCov");
  }
  
  public productmodel.DirectBOPHearingAidSalesType getBOPHearingAidSalesTerm() {
    return (productmodel.DirectBOPHearingAidSalesType)getCovTerm("BOPHearingAidSales");
  }
  
  public boolean getHasBOPHearingAidSalesTerm() {
    return hasCovTerm("BOPHearingAidSales");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPHearingAidCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPHearingAidCov>() {
      public productmodel.BOPHearingAidCov newEmptyInstance() {
        return new productmodel.BOPHearingAidCov();
      }
      
      
    });
  }
}