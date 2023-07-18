package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/WorkersCompLine/coveragepatterns/WCWorkCompExMedExcl.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class WCWorkCompExMedExcl extends entity.WorkersCompExcl {
  protected WCWorkCompExMedExcl()  {
    super((java.lang.Void)null);
  }
  
  public WCWorkCompExMedExcl(entity.PolicyPeriod branch)  {
    super(branch, "WCWorkCompExMedExcl");
  }
  
  public WCWorkCompExMedExcl(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "WCWorkCompExMedExcl");
  }
  
  static {
    com.guidewire._generated.productmodel.WCWorkCompExMedExclInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.WCWorkCompExMedExcl>() {
      public productmodel.WCWorkCompExMedExcl newEmptyInstance() {
        return new productmodel.WCWorkCompExMedExcl();
      }
      
      
    });
  }
}