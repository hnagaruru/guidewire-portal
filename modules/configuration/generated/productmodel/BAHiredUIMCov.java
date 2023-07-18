package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAHiredUIMCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BAHiredUIMCov extends entity.BusinessAutoCov {
  protected BAHiredUIMCov()  {
    super((java.lang.Void)null);
  }
  
  public BAHiredUIMCov(entity.PolicyPeriod branch)  {
    super(branch, "BAHiredUIMCov");
  }
  
  public BAHiredUIMCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BAHiredUIMCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BAHiredUIMCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BAHiredUIMCov>() {
      public productmodel.BAHiredUIMCov newEmptyInstance() {
        return new productmodel.BAHiredUIMCov();
      }
      
      
    });
  }
}