package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPDesigPremProj.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPDesigPremProj extends entity.BusinessOwnersCov {
  protected BOPDesigPremProj()  {
    super((java.lang.Void)null);
  }
  
  public BOPDesigPremProj(entity.PolicyPeriod branch)  {
    super(branch, "BOPDesigPremProj");
  }
  
  public BOPDesigPremProj(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPDesigPremProj");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPDesigPremProjInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPDesigPremProj>() {
      public productmodel.BOPDesigPremProj newEmptyInstance() {
        return new productmodel.BOPDesigPremProj();
      }
      
      
    });
  }
}