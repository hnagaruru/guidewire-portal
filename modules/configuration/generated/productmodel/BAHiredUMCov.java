package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAHiredUMCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BAHiredUMCov extends entity.BusinessAutoCov {
  protected BAHiredUMCov()  {
    super((java.lang.Void)null);
  }
  
  public BAHiredUMCov(entity.PolicyPeriod branch)  {
    super(branch, "BAHiredUMCov");
  }
  
  public BAHiredUMCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BAHiredUMCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BAHiredUMCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BAHiredUMCov>() {
      public productmodel.BAHiredUMCov newEmptyInstance() {
        return new productmodel.BAHiredUMCov();
      }
      
      
    });
  }
}