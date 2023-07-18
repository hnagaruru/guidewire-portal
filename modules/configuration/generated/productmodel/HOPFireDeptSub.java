package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPFireDeptSub.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPFireDeptSub extends entity.HOPLineCond {
  protected HOPFireDeptSub()  {
    super((java.lang.Void)null);
  }
  
  public HOPFireDeptSub(entity.PolicyPeriod branch)  {
    super(branch, "z1jg2crrqf62jansntd859612e9");
  }
  
  public HOPFireDeptSub(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z1jg2crrqf62jansntd859612e9");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPFireDeptSubInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPFireDeptSub>() {
      public productmodel.HOPFireDeptSub newEmptyInstance() {
        return new productmodel.HOPFireDeptSub();
      }
      
      
    });
  }
}