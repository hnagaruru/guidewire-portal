package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPPersAdvertInj.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPPersAdvertInj extends entity.BusinessOwnersCov {
  protected BOPPersAdvertInj()  {
    super((java.lang.Void)null);
  }
  
  public BOPPersAdvertInj(entity.PolicyPeriod branch)  {
    super(branch, "BOPPersAdvertInj");
  }
  
  public BOPPersAdvertInj(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPPersAdvertInj");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPPersAdvertInjInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPPersAdvertInj>() {
      public productmodel.BOPPersAdvertInj newEmptyInstance() {
        return new productmodel.BOPPersAdvertInj();
      }
      
      
    });
  }
}