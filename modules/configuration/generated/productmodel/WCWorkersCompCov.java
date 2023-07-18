package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/WorkersCompLine/coveragepatterns/WCWorkersCompCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class WCWorkersCompCov extends entity.WorkersCompCov {
  protected WCWorkersCompCov()  {
    super((java.lang.Void)null);
  }
  
  public WCWorkersCompCov(entity.PolicyPeriod branch)  {
    super(branch, "WCWorkersCompCov");
  }
  
  public WCWorkersCompCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "WCWorkersCompCov");
  }
  
  static {
    com.guidewire._generated.productmodel.WCWorkersCompCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.WCWorkersCompCov>() {
      public productmodel.WCWorkersCompCov newEmptyInstance() {
        return new productmodel.WCWorkersCompCov();
      }
      
      
    });
  }
}