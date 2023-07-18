package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BANonOwndSSExtendCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BANonOwndSSExtendCov extends entity.BAStateCov {
  protected BANonOwndSSExtendCov()  {
    super((java.lang.Void)null);
  }
  
  public BANonOwndSSExtendCov(entity.PolicyPeriod branch)  {
    super(branch, "BANonOwndSSExtendCov");
  }
  
  public BANonOwndSSExtendCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BANonOwndSSExtendCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BANonOwndSSExtendCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BANonOwndSSExtendCov>() {
      public productmodel.BANonOwndSSExtendCov newEmptyInstance() {
        return new productmodel.BANonOwndSSExtendCov();
      }
      
      
    });
  }
}